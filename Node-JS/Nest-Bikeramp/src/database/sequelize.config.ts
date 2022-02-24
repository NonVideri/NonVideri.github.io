import { DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_PORT } from '../constants';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  SequelizeModuleAsyncOptions,
  SequelizeModuleOptions,
} from '@nestjs/sequelize';
import { Trip } from './trip.model';

export default class SequelizeConfig {
  static getSequelizeConfig(
    configService: ConfigService,
  ): SequelizeModuleOptions {
    return {
      username: configService.get(DB_USER),
      password: configService.get(DB_PASS),
      database: configService.get(DB_NAME),
      host: configService.get(DB_HOST),
      port: parseInt(configService.get(DB_PORT)),
      dialect: 'postgres',
      models: [Trip],
    };
  }
}

export const sequelizeConfigAsync: SequelizeModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<SequelizeModuleOptions> =>
    SequelizeConfig.getSequelizeConfig(configService),
};
