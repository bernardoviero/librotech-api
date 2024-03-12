import { Author } from "../../../entities/Author";
import { IAuthorsRepository } from "../../../repositories/IAuthorsRepository";
import { IAuthorRequestDTO } from "./AuthorDTO";

export class AuthorUseCase {
  constructor(
    private autoresRepository: IAuthorsRepository,
  ) { }

  async execute(data: IAuthorRequestDTO) {
    const authorAlreadyExists = await this.autoresRepository.findAuthorByName(data.name);

    if (authorAlreadyExists) {
      throw new Error('Author already exists.');
    }

    const author = new Author(data);

    const newAuthor = await this.autoresRepository.save(author)
  }
}