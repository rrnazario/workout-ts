import { QueryHandler } from "@nestjs/cqrs";
import { IQueryHandler } from "@nestjs/cqrs/dist";
import { Exercise } from "src/domain/aggregations";
import { ExerciseGetAllQuery, ExerciseGetAllResponse } from "../queries/exercise-getall.query";

@QueryHandler(ExerciseGetAllQuery)
export class ExerciseGetAllQueryHandler
    implements IQueryHandler<ExerciseGetAllQuery, ExerciseGetAllResponse[]>
{
    execute(_: ExerciseGetAllQuery): Promise<ExerciseGetAllResponse[]> {
        return Promise.resolve([
            new ExerciseGetAllResponse(new Exercise('Supino reto', '', ['www.partituravip.com.br'])),
            new ExerciseGetAllResponse(new Exercise('Supino declinado', 'Consiga uma amplitude maior', [''])),
        ]);
    }
}