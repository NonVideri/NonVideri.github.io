import { Trip } from '../database/trip.model';
import { Inject, Injectable } from '@nestjs/common';
import { DATE, DATE_FORMAT, DISTANCE, PRICE, SUM, AVG } from '../constants';
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
import { TRIP_REPOSITORY } from '../constants';
import { GetStatsDto } from './stats.dtos';

@Injectable()
export class StatsService {
  constructor(
    @Inject(TRIP_REPOSITORY) private readonly tripRepository: typeof Trip,
  ) {}

  async getWeeklyStats(getStatsDto: GetStatsDto): Promise<WeeklyStats> {
    const { dist_unit, price_unit } = getStatsDto;
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
      dist_unit,
    );
    const total_price = toUnit(
      weeklyStats[0].getDataValue(TOTAL_PRICE),
      price_unit,
    );

    return { total_distance, total_price };
  }

  async getMonthlyStats(getStatsDto: GetStatsDto): Promise<DailyStats[]> {
    const { dist_unit, price_unit } = getStatsDto;

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
        dist_unit,
      );
      const avg_ride = toUnit(dailyStats.getDataValue(AVG_DIST), dist_unit);
      const avg_price = toUnit(dailyStats.getDataValue(AVG_PRICE), price_unit);
      monthlyStats.push({ day, total_distance, avg_ride, avg_price });
    }

    return monthlyStats;
  }
}
