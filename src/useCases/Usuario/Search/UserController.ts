import { Request, Response } from "express";
import { UserUseCase } from "./UserUseCase";

export class UserController {
  constructor(
    private userUseCase: UserUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const userId: string = request.params.id;
      const user = await this.userUseCase.execute(userId);

      return response.status(200).json(user);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}