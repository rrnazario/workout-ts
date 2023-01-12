import { Exercise } from "src/domain/aggregations";
import { ApiProperty } from '@nestjs/swagger';

export class ExerciseResponse {
    @ApiProperty()
    name:string;

    @ApiProperty()
    description: string;

    constructor(
        exercise?: Exercise
    ){
        this.name = exercise?.name ?? ''
        this.description = exercise?.description ?? ''
    }
}