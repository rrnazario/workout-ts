import { Controller, Get, UseFilters, UseInterceptors } from '@nestjs/common';
import { Param, Post } from '@nestjs/common/decorators';
import { QueryBus } from '@nestjs/cqrs/dist/query-bus';
import { ExerciseResponse } from 'src/application/dtos';
import { ExerciseGetAllQuery } from 'src/application/queries';
import { ExerciseGetByIdQuery } from 'src/application/queries/exercise-getbyid.query';
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
  async getAll(): Promise<ExerciseResponse[]> {
    const result = this.queryBus.execute(new ExerciseGetAllQuery())
    
    return result;
  }

  @Get(':id')
  async getById(@Param('id') id: Number): Promise<ExerciseResponse> {
    const result = this.queryBus.execute(new ExerciseGetByIdQuery(id))
    
    return result;
  }
}