import { PrismaAuthorsRepository } from "../../../repositories/implementations/PrismaAuthorsRepository";
import { AuthorController } from "./AuthorController";
import { AuthorUseCase } from "./AuthorUseCase";

const prismaAuthorsRepository = new PrismaAuthorsRepository

const authorUseCase = new AuthorUseCase(
    prismaAuthorsRepository,
)

const createAuthorController = new AuthorController(
    authorUseCase
)

export { authorUseCase, createAuthorController }