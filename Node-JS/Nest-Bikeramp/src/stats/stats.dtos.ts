import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { DistUnits, PriceUnits } from '../constants';

export class GetStatsDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(DistUnits)
  readonly dist_unit: DistUnits;

  @IsNotEmpty()
  @IsString()
  @IsEnum(PriceUnits)
  readonly price_unit: PriceUnits;
}
