export interface ITokenProvider {
    generateToken(id: string, email: string): Promise<string>;
    verifyToken(token: string): Promise<boolean>;
}