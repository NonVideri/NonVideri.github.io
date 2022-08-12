import { Module } from '@nestjs/common';
import { tripProvider } from '../database/trip.providers';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  controllers: [StatsController],
  providers: [StatsService, tripProvider],
})
export class StatsModule {}
