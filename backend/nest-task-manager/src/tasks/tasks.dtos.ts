import { TaskStatus, allowedStatuses } from './task.model';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn(allowedStatuses)
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
