import { IMailProvider } from "../IMailProvider";

export class MailTrap implements IMailProvider {
    private nodemailer = require('nodemailer');
    async sendMail(to: string, subject: string, body: string): Promise<boolean> {
        const transporter = this.nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASS
            }
        });
        const emailOptions = {
            from: 'seu_email@gmail.com',
            to: to,
            subject: subject,
            text: body
        };

        try {
            const info = await transporter.sendMail(emailOptions);
            console.log('E-mail enviado:', info.messageId);
            return true;
        } catch (error: any) {
            console.error('Erro ao enviar e-mail:', error);
            throw new Error(error);
        }
    }
    verifyCode(email: string, code: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
