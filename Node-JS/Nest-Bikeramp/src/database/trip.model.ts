import { UUIDVersion } from 'class-validator';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table({ timestamps: false })
export class Trip extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: UUIDVersion;

  @Column({ type: DataType.STRING, allowNull: false })
  start_address: string;

  @Column({ type: DataType.STRING, allowNull: false })
  destination_address: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  date: Date;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  price: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  distance: number;
}
