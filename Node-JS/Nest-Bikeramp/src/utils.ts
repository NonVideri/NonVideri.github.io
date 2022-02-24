import { DistUnits, PriceUnits } from './constants';
type AllUnits = DistUnits | PriceUnits;

// DB stores distance in meters and price in grosz (1/100th PLN unit)
export const toUnit = (value: number, unit: AllUnits) => {
  switch (unit) {
    case DistUnits.kilometers:
      return toKM(value);
    case DistUnits.miles:
      return toMiles(value);
    case PriceUnits.PLN:
      return toPLN(value);
  }
};

const concatUnit = (value: number, unit: AllUnits) => {
  return `${value}${unit}`;
};

// distance converters
const toKM = (value: number) => {
  return concatUnit(value / 1000, DistUnits.kilometers);
};

const toMiles = (value: number) => {
  return concatUnit(value / 1609.34, DistUnits.miles);
};

// price converters
const toPLN = (value: number) => {
  return concatUnit(value / 100, PriceUnits.PLN);
};
