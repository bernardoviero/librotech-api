import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
    constructor(
        private loginUseCase: LoginUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, senha } = request.body;

        try {
            const user = await this.loginUseCase.execute({
                email,
                token: '',
                senha
            })
            return response.status(201).send(user);
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}