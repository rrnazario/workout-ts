import { Module } from "@nestjs/common";
import { DomainModule } from "src/domain/domain.module";
import { ExerciseGetAllQueryHandler } from "./handlers";
import { ExerciseGetAllQuery, ExerciseGetAllResponse } from "./queries";

@Module({
    imports:[DomainModule],
    providers: [
        ExerciseGetAllQuery,
        ExerciseGetAllResponse,
        ExerciseGetAllQueryHandler
    ]
})
export class ApplicationModule {}