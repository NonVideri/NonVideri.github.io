import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { DistUnits } from '../constants';

export class GetStatsDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(DistUnits)
  readonly distUnit: DistUnits;
}
