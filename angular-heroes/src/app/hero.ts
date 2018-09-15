export class Hero {
    id: number;
    name: string;
    icon: string;
    description: string;

    constructor(id: number, name: string, icon: string, description: string) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.description = description;
    }
}