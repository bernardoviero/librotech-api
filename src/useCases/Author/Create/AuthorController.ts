import { Request, Response } from "express";
import { AuthorUseCase } from "./AuthorUseCase";

export class UserController {
  constructor(
    private authorUseCase: AuthorUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, nationality } = request.body;

    try {
      const newAuthor = await this.authorUseCase.execute({
        name,
        nationality,
        active: true
      })
      return response.status(201).send(newAuthor);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}