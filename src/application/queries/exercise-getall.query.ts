import Exercise from "src/domain/aggregations/exercise.aggregation";

export class ExerciseGetAllQuery { }

export class ExerciseGetAllQueryResponse {
    constructor(
        public readonly exercises: Exercise[]
    ){}
}