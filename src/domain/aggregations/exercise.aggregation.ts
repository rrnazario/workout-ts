import { Entity } from "../seedwork";

export class Exercise extends Entity {
    constructor(
        public name: string,
        public description: string,
        public links: string[]
    ) {
        super();
    }
}