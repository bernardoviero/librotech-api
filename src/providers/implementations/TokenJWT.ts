import { ITokenProvider } from "../ITokenProvider";
require('dotenv').config();

export class TokenJWT implements ITokenProvider {
    private jwt = require('jsonwebtoken');
    private chaveSecreta = process.env.CHAVE_SECRETA;

    async verifyToken(token: string): Promise<boolean> {
        try {
            const decoded = this.jwt.verify(token, this.chaveSecreta);
            return true;
        } catch (error) {
            throw false;
        }
    }

    async generateToken(senha: string, email: string): Promise<string> {
        try {
            const payload = { senha, email }
            const token = this.jwt.sign(payload, this.chaveSecreta, { expiresIn: '1h' });
            return token;
        } catch (err: any) {
            console.log(err);
            return err;
        }
    }
}