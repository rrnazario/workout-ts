import { Module } from "@nestjs/common";
import Exercise from "./aggregations/exercise.aggregation";

@Module({
    providers:[Exercise]
})
export class DomainModule{}