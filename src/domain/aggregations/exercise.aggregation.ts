import Entity from "../seedwork/entity.seedwork";

export default class Exercise extends Entity {
    public name: string;
    public description: string;
    public links: string[];

    constructor(name: string, description: string, links:string[]) {
        super();

        this.name = name;
        this.description = description;
        this.links = links;
    }
}