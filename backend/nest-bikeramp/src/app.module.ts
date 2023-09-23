import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TripsModule } from './trips/trips.module';
import { StatsModule } from './stats/stats.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfigAsync } from './database/sequelize.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync(sequelizeConfigAsync),
    TripsModule,
    StatsModule,
  ],
})
export class AppModule {}
