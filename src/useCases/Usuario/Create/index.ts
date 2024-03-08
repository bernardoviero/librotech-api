import { PasswordHash } from "../../../providers/implementations/PasswordHash";
import { PrismaUsersRepository } from "../../../repositories/implementations/PrismaUsersRepository";
import { UserController } from "./UserController";
import { UserUseCase } from "./UserUseCase";

const prismaUsersRepository = new PrismaUsersRepository
const passwordHash = new PasswordHash

const userUseCase = new UserUseCase(
  prismaUsersRepository,
  passwordHash
)

const createUserController = new UserController(
  userUseCase
)

export { userUseCase, createUserController }