import { HttpException, Inject, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { BICYCLING, GOOGLE_MAPS_API_KEY } from '../constants';

import { CreateTripDto } from './trips.dtos';
import { Trip } from '../database/trip.model';
import { ConfigService } from '@nestjs/config';
import { DistanceMatrixResponse } from './trips.interfaces';
import { TRIP_REPOSITORY } from '../database/database.constants';
const { Client } = require('@googlemaps/google-maps-services-js');
const mapsClient = new Client({});

@Injectable()
export class TripsService {
  constructor(
    @Inject(TRIP_REPOSITORY) private readonly tripRepository: typeof Trip,
    private configService: ConfigService,
  ) {}

  async createTrip(createTripDto: CreateTripDto): Promise<Trip> {
    const { start_address, destination_address } = createTripDto;

    // Distance is calculated in meters
    const response: DistanceMatrixResponse = await mapsClient.distanceMatrix({
      params: {
        origins: [start_address],
        destinations: [destination_address],
        travelMode: BICYCLING,
        avoidHighways: false,
        avoidTolls: false,
        key: this.configService.get(GOOGLE_MAPS_API_KEY),
      },
    });
    if (response.rows[0].elements[0].status === 'OK') {
      const distance = response.rows[0].elements[0].distance.value;
      return await this.tripRepository.create<Trip>({
        ...createTripDto,
        price: Math.round(createTripDto.price * 100),
        id: uuid(),
        distance,
      });
    } else
      throw new HttpException(
        'Distance Matrix service failed. Try again later.',
        500,
      );
  }
}
