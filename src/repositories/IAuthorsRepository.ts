import { Author } from "../entities/Author";

export interface IAuthorsRepository {
    findAuthorByName(name: string): Promise<Author | null>;
    save(author: Author): Promise<Author | null>;
}