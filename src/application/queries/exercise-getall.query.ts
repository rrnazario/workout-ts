import { Exercise } from "src/domain/aggregations";

export class ExerciseGetAllQuery { }

export class ExerciseGetAllQueryResponse {
    constructor(
        public readonly exercises: Exercise[]
    ){}
}