import { TRIP_REPOSITORY } from './database.constants';
import { Trip } from './trip.model';

export const tripProvider = {
  provide: TRIP_REPOSITORY,
  useValue: Trip,
};
