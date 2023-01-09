import { Controller, Get } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs/dist/command-bus';
import { QueryBus } from '@nestjs/cqrs/dist/query-bus';
import { ExerciseGetAllQuery, ExerciseGetAllQueryResponse } from 'src/application/queries';

@Controller('exercise')
export class ExerciseController {
  constructor(
    private readonly queryBus: QueryBus
  ) {}

  @Get()
  async getAll(): Promise<ExerciseGetAllQueryResponse> {
    const result = this.queryBus.execute(new ExerciseGetAllQuery())
    
    return result;
  }
}