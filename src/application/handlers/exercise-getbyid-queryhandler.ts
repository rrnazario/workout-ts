import { QueryHandler } from "@nestjs/cqrs";
import { IQueryHandler } from "@nestjs/cqrs/dist";
import { Exercise } from "src/domain/aggregations";
import { ExerciseResponse } from "../dtos";
import { ExerciseGetByIdQuery } from "../queries/exercise-getbyid.query";

@QueryHandler(ExerciseGetByIdQuery)
export class ExerciseGetByIdQueryHandler
    implements IQueryHandler<ExerciseGetByIdQuery, ExerciseResponse>
{
    execute(_: ExerciseGetByIdQuery): Promise<ExerciseResponse> {
        return Promise.resolve(
            new ExerciseResponse(new Exercise('Supino declinado', '', ['www.partituravip.com.br'])))
    }
}