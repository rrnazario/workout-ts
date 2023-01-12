import { Exercise } from "src/domain/aggregations";

export class ExerciseGetAllQuery { }

export class ExerciseGetAllResponse {
    name:string;
    description: string;

    constructor(
        exercise?: Exercise
    ){
        this.name = exercise?.name ?? ''
        this.description = exercise?.description ?? ''
    }
}