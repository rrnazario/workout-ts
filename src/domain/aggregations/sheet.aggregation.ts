import { Entity } from "../seedwork";
import { Serie } from "./serie.aggregation";
import { Trainee } from "./trainee.aggregation";
import { Trainer } from "./trainer.aggregation";

export class Sheet extends Entity {
    constructor(
        public trainee: Trainee,
        public trainer: Trainer,
        public series: Serie[],
        public name: string,
        public startDate: Date,
        public endDate: Date,
    ) {
        super();
    }
}