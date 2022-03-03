import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { Trip } from '../database/trip.model';
import { TripsService } from './trips.service';
import { UUIDV4 } from 'sequelize';

describe('TripsService', () => {
  let service: TripsService;

  const mockRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TripsService,
        { provide: getModelToken(Trip), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<TripsService>(TripsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTrip', () => {
    const mockDto = {
      start_address: 'Plac Europejski 2, Warszawa, Polska',
      destination_address: 'Plac Europejski 2, Warszawa, Polska',
      price: 10.99,
      date: new Date(),
    };

    const mockResult = {
      ...mockDto,
      id: expect.any(UUIDV4),
      distance: expect.any(Number),
    };

    it('should create a new Trip and return it', async () => {
      expect(await service.createTrip(mockDto)).toEqual(mockResult);
    });
  });
});
