import { Module } from "@nestjs/common";
import { DomainModule } from "src/domain/domain.module";
import { ExerciseResponse } from "./dtos/exercise-response.dto";
import { ExerciseGetAllQueryHandler } from "./handlers";
import { ExerciseGetByIdQueryHandler } from "./handlers/exercise-getbyid-queryhandler";
import { ExerciseGetAllQuery } from "./queries";
import { ExerciseGetByIdQuery } from "./queries/exercise-getbyid.query";

const Queries = [ExerciseGetAllQuery, ExerciseGetByIdQuery]
const QueryHandlers = [ExerciseGetAllQueryHandler, ExerciseGetByIdQueryHandler]

@Module({
    imports:[DomainModule],
    providers: [
        ...Queries,
        ...QueryHandlers,
        ExerciseResponse
    ]
})
export class ApplicationModule {}