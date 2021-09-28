import { BadRequestException, PipeTransform } from '@nestjs/common';
import { allowedStatuses } from './task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  private isStatusValid(status: any) {
    return allowedStatuses.indexOf(status) !== -1;
  }

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value))
      throw new BadRequestException(`Value ${value} is an invalid status.`);

    return value;
  }
}
