import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TripsModule } from '../src/trips/trips.module';
import * as request from 'supertest';
import { getModelToken } from '@nestjs/sequelize';
import { Trip } from '../src/database/trip.model';

describe('TripsController (e2e)', () => {
  let app: INestApplication;

  const mockRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TripsModule],
    })
      .overrideProvider(getModelToken(Trip))
      .useValue(mockRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a valid /trips (POST) request', () => {
    const body = {
      start_address: 'Plac Europejski 2, Warszawa, Polska',
      destination_address: 'Plac Europejski 2, Warszawa, Polska',
      price: 10.99,
      date: new Date(),
    };

    return request(app.getHttpServer())
      .post('/trips')
      .send(body)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual({
          ...body,
          id: expect.any(String),
          distance: expect.any(Number),
        });
      });
  });
});
