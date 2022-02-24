import { Module } from '@nestjs/common';
import { tripProvider } from '../database/trip.providers';
import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';

@Module({
  controllers: [TripsController],
  providers: [TripsService, tripProvider],
})
export class TripsModule {}
