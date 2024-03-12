import { v4 as uuidv4 } from 'uuid';

export class Author {
    public readonly id!: string;

    public name: string;
    public nationality: string;
    public active: boolean;

    constructor(props: Omit<Author, 'id'>, id?: string) {
        this.name = props.name;
        this.nationality = props.nationality;
        this.active = props.active;

        if (!id) {
            this.id = uuidv4();
        }
    }
}