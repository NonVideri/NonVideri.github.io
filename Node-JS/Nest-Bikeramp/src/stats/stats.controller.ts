import { Controller, Get, Query } from '@nestjs/common';
import { GetStatsDto } from './stats.dtos';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}

  @Get('weekly')
  public getWeeklyStats(@Query() getStatsDto: GetStatsDto) {
    return this.statsService.getWeeklyStats(getStatsDto);
  }

  @Get('monthly')
  public getMonthlyStats() {
    return this.statsService.getMonthlyStats();
  }
}
