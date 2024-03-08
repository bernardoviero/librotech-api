export interface IMailProvider {
    sendMail(to: string, subject: string, body: string): Promise<boolean>;
    verifyCode(email: string, code: string): Promise<boolean>;
}