import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxDate,
} from 'class-validator';
import { endOfToday } from 'date-fns';

const addressRegex = /.+,.+,.+/;

export class CreateTripDto {
  @IsNotEmpty()
  @IsString()
  @Matches(addressRegex)
  readonly start_address: string;

  @IsNotEmpty()
  @IsString()
  @Matches(addressRegex)
  readonly destination_address: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsDate()
  @MaxDate(endOfToday())
  readonly date: Date;
}
