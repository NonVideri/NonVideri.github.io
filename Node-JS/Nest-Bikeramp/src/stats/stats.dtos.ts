import { IsEnum, IsString } from 'class-validator';
import { DistUnits, PriceUnits } from '../constants';

export class GetStatsDto {
  @IsString()
  @IsEnum(DistUnits)
  readonly dist_unit: DistUnits = DistUnits.kilometers;

  @IsString()
  @IsEnum(PriceUnits)
  readonly price_unit: PriceUnits = PriceUnits.PLN;
}
