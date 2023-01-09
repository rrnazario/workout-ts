import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs/dist";
import { ApplicationModule } from "src/application/application.module";
import { ExerciseController } from "./controllers";

@Module({
    imports:[
        CqrsModule,
        ApplicationModule
    ],
    controllers:[ExerciseController]
})
export class PresentationModule{}