import { Request, Response } from "express";
import { UserUseCase } from "./UserUseCase";

export class UserController {
  constructor(
    private UserUseCase: UserUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, email, senha, ativo } = request.body;

    try {
      await this.UserUseCase.execute({
        nome,
        email,
        senha,
        ativo: true
      })
      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}