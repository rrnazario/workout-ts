export abstract class Entity {
    public id: number = Math.floor(Math.random() * 100);
}

export abstract class Person extends Entity {
    constructor(
        public name: string
    ){
        super();
    }
}