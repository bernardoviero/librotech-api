import { PrismaUsersRepository } from "../../../repositories/implementations/PrismaUsersRepository";
import { UserController } from "./UserController";
import { UserUseCase } from "./UserUseCase";

const prismaUsersRepository = new PrismaUsersRepository

const userUseCase = new UserUseCase(
    prismaUsersRepository,
)

const searchUserController = new UserController(
    userUseCase
)

export { userUseCase, searchUserController }