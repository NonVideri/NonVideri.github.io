import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { Trip } from '../database/trip.model';
import { StatsService } from './stats.service';

describe('StatsService', () => {
  let service: StatsService;

  const mockRepository = {
    findAll: jest.fn().mockImplementation(() => {
      return {
        total_distance: '40km',
        total_price: '49.75PLN',
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StatsService,
        { provide: getModelToken(Trip), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<StatsService>(StatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
