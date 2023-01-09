import { Module } from "@nestjs/common";
import { Exercise } from "./aggregations";

@Module({
    providers:[Exercise]
})
export class DomainModule{}