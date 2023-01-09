import { Module } from "@nestjs/common";
import { DomainModule } from "src/domain/domain.module";
import { ExerciseGetAllQueryHandler } from "./handlers";
import { ExerciseGetAllQuery, ExerciseGetAllQueryResponse } from "./queries";

@Module({
    imports:[DomainModule],
    providers: [
        ExerciseGetAllQuery,
        ExerciseGetAllQueryResponse,
        ExerciseGetAllQueryHandler
    ]
})
export class ApplicationModule {}