// .env constants
export const DB_USER = 'DB_USER';
export const DB_PASS = 'DB_PASS';
export const DB_NAME = 'DB_NAME';
export const DB_HOST = 'DB_HOST';
export const DB_PORT = 'DB_PORT';
export const GOOGLE_MAPS_API_KEY = 'GOOGLE_MAPS_API_KEY';

// Database repositories
export const TRIP_REPOSITORY = 'TRIP_REPOSITORY';

// Sequelize DB column names
export const DISTANCE = 'distance';
export const PRICE = 'price';
export const DATE = 'date';

// Sequelize model instance constants
export const SUM = 'SUM';
export const AVG = 'AVG';

// Distance Matrix constants
export const BICYCLING = 'BICYCLING';

// units (used to return data)
export enum DistUnits {
  kilometers = 'km',
  miles = 'mi.',
}

export enum PriceUnits {
  PLN = 'PLN',
}

export const DATE_FORMAT = 'MMMM, do'; // Supported: see date-fns format() (version from package.json)
