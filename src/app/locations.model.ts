export class Location {
    public id?: string
    public title: string;
    public description: string;
    constructor(title: string, desc: string, id?: string,) {
        this.id = id;
        this.title = title;
        this.description = desc
    }
}