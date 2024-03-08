import { Request, Response } from "express";
import { UserUseCase } from "./UserUseCase";

export class UserController {
  constructor(
    private UserUseCase: UserUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, token, email, nome } = request.body;

    try {
      const userUpdate = await this.UserUseCase.execute({
        id,
        email,
        token,
        nome
      })
      return response.status(201).send(userUpdate);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}