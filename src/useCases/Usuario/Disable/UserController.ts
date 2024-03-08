import { Request, Response } from "express";
import { UserUseCase } from "./UserUseCase";

export class UserController {
  constructor(
    private UserUseCase: UserUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, email, token } = request.body;

    try {
      await this.UserUseCase.execute({
        id,
        email,
        token,
        ativo: false
      })
      return response.status(201).send();
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}