import { Entity } from "../seedwork";
import { Exercise } from "./exercise.aggregation";

export class Serie extends Entity {
    constructor(
        public exercise: Exercise,
        public repetitions: number,
        public weight: number
    ) {
        super();
    }
}