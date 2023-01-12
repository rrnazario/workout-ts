import { Controller, Get, UseFilters, UseInterceptors } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs/dist/command-bus';
import { QueryBus } from '@nestjs/cqrs/dist/query-bus';
import { ExerciseGetAllQuery, ExerciseGetAllResponse } from 'src/application/queries';
import { ErrorFilter } from 'src/infra/filters/error.filter';
import { LogInterceptor } from 'src/infra/interceptors/log.interceptor';

@Controller('exercise')
@UseFilters( new ErrorFilter())
@UseInterceptors(new LogInterceptor())

export class ExerciseController {
  constructor(
    private readonly queryBus: QueryBus
  ) {}

  @Get()
  async getAll(): Promise<ExerciseGetAllResponse> {
    const result = this.queryBus.execute(new ExerciseGetAllQuery())
    
    return result;
  }
}