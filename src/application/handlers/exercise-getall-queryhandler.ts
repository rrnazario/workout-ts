import { QueryHandler } from "@nestjs/cqrs";
import { IQueryHandler } from "@nestjs/cqrs/dist";
import { Exercise } from "src/domain/aggregations";
import { ExerciseGetAllQuery, ExerciseGetAllQueryResponse } from "../queries/exercise-getall.query";

@QueryHandler(ExerciseGetAllQuery)
export class ExerciseGetAllQueryHandler
implements IQueryHandler<ExerciseGetAllQuery, ExerciseGetAllQueryResponse>
{
    execute(_: ExerciseGetAllQuery): Promise<ExerciseGetAllQueryResponse> {
        return Promise.resolve(new ExerciseGetAllQueryResponse([
            new Exercise('Supino reto', '', ['']),
            new Exercise('Supino declinado', 'Consiga uma amplitude maior', ['']),
        ]));
    }
}