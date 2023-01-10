import { Entity } from "./entity.seedwork";

export abstract class Person extends Entity {
    constructor(
        public name: string
    ){
        super();
    }
}