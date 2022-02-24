import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuid } from 'uuid';
import { TripsController } from './trips.controller';
import { CreateTripDto } from './trips.dtos';
import { TripsService } from './trips.service';

describe('TripsController', () => {
  let controller: TripsController;
  const mockService = {
    createTrip: jest.fn((dto) => {
      return {
        ...dto,
        id: uuid(),
        price: Math.round(dto.price * 100),
        distance: dto.start_address.len + dto.destination_address.len,
      };
    }),
  };

  beforeEach(async () => {
    let app: INestApplication;

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripsController],
      providers: [TripsService],
    })
      .overrideProvider(TripsService)
      .useValue(mockService)
      .compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    controller = module.get<TripsController>(TripsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createTrip', () => {
    const mockDto = {
      start_address: 'Plac Europejski 2, Warszawa, Polska',
      destination_address: 'Plac Europejski 2, Warszawa, Polska',
      price: '10,99',
      date: new Date(),
    };

    const mockResult = {
      ...mockDto,
      id: expect.any(String),
      price: Math.round(5 * 100),
      distance: expect.any(Number),
    };

    it('should return a new trip', () => {
      expect(
        controller.createTrip(mockDto as unknown as CreateTripDto),
      ).toEqual(mockResult);
    });

    it('should call TripService', () => {
      expect(mockService.createTrip).toHaveBeenCalledWith(mockDto);
    });
  });
});
