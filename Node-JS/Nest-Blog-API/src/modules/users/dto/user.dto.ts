import { Model } from 'sequelize-typescript';

export class UserDto extends Model {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly gender: string;
}
