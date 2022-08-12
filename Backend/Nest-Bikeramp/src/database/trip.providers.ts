import { TRIP_REPOSITORY } from '../constants';
import { Trip } from './trip.model';

export const tripProvider = {
  provide: TRIP_REPOSITORY,
  useValue: Trip,
};
