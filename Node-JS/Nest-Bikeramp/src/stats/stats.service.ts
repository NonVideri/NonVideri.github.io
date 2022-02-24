import { Trip } from '../database/trip.model';
import { Inject, Injectable } from '@nestjs/common';
import {
  DATE,
  PRICE_UNIT,
  DIST_UNIT,
  DATE_FORMAT,
  DISTANCE,
  PRICE,
  SUM,
  AVG,
  PriceUnits,
} from '../constants';
import {
  AVG_DIST,
  AVG_PRICE,
  TOTAL_DIST,
  TOTAL_PRICE,
} from './stats.constants';
import {
  endOfToday,
  startOfWeek,
  startOfMonth,
  format,
  parseISO,
} from 'date-fns';
import { DailyStats, WeeklyStats } from './stats.interfaces';
import { Op, fn, col } from 'sequelize';
import { toUnit } from 'src/utils';
import { TRIP_REPOSITORY } from '../database/database.constants';
import { GetStatsDto as GetStatsDto } from './stats.dtos';

@Injectable()
export class StatsService {
  constructor(
    @Inject(TRIP_REPOSITORY) private readonly tripRepository: typeof Trip,
  ) {}

  async getWeeklyStats(getStatsDto: GetStatsDto): Promise<WeeklyStats> {
    const { distUnit } = getStatsDto;
    // Could do much easier as two queries, but would be slower with big DB
    const weeklyStats = await this.tripRepository.findAll({
      attributes: [
        [fn(SUM, col(DISTANCE)), TOTAL_DIST],
        [fn(SUM, col(PRICE)), TOTAL_PRICE],
      ],
      where: {
        date: { [Op.gt]: startOfWeek(new Date()), [Op.lte]: endOfToday() },
      },
    });

    const total_distance = toUnit(
      weeklyStats[0].getDataValue(TOTAL_DIST),
      distUnit,
    );
    const total_price = toUnit(
      weeklyStats[0].getDataValue(TOTAL_PRICE),
      PriceUnits.PLN,
    );

    return { total_distance, total_price };
  }

  async getMonthlyStats(): Promise<DailyStats[]> {
    const dailyStatsArray = await this.tripRepository.findAll({
      attributes: [
        DATE,
        [fn(SUM, col(DISTANCE)), TOTAL_DIST],
        [fn(AVG, col(DISTANCE)), AVG_DIST],
        [fn(AVG, col(PRICE)), AVG_PRICE],
      ],
      where: {
        date: { [Op.gt]: startOfMonth(new Date()), [Op.lte]: endOfToday() },
      },
      group: DATE,
    });

    const monthlyStats = [];
    // map results
    for (let dailyStats of dailyStatsArray) {
      const day = format(parseISO(dailyStats.getDataValue(DATE)), DATE_FORMAT);
      const total_distance = toUnit(
        dailyStats.getDataValue(TOTAL_DIST),
        DIST_UNIT,
      );
      const avg_ride = toUnit(dailyStats.getDataValue(AVG_DIST), DIST_UNIT);
      const avg_price = toUnit(dailyStats.getDataValue(AVG_PRICE), PRICE_UNIT);
      monthlyStats.push({ day, total_distance, avg_ride, avg_price });
    }

    return monthlyStats;
  }
}
