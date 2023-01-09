import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs/dist";
import { ExerciseGetAllQueryHandler } from "src/application/handlers/exercise-getall-queryhandler";
import { ExerciseController } from "./controllers";

@Module({
    imports:[CqrsModule],
    controllers:[ExerciseController],
    providers: [ExerciseGetAllQueryHandler]
})
export class PresentationModule{}