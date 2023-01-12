import { QueryHandler } from "@nestjs/cqrs";
import { IQueryHandler } from "@nestjs/cqrs/dist";
import { Exercise } from "src/domain/aggregations";
import { ExerciseResponse } from "../dtos";
import { ExerciseGetAllQuery } from "../queries/exercise-getall.query";

@QueryHandler(ExerciseGetAllQuery)
export class ExerciseGetAllQueryHandler
    implements IQueryHandler<ExerciseGetAllQuery, ExerciseResponse[]>
{
    execute(_: ExerciseGetAllQuery): Promise<ExerciseResponse[]> {
        return Promise.resolve([
            new ExerciseResponse(new Exercise('Supino reto', '', ['www.partituravip.com.br'])),
            new ExerciseResponse(new Exercise('Supino declinado', 'Consiga uma amplitude maior', [''])),
        ]);
    }
}