import Email from 'email-templates';
import path from 'path';

export default class MailController {
    static async sendMail() {
        const email = new Email({
            message: {
                from: 'niftylettuce@gmail.com'
            },
            transport: {
                jsonTransport: true
            },
            preview: false,
            send: false,
            views: {
                root: path.join(__dirname, 'emails'),
                options: {
                    extension: 'ejs'
                }
            }
        });

        email
            .send({
                template: 'mars',
                message: {
                    to: 'elon@spacex.com'
                },
                locals: {
                    name: 'Elon',
                    subject: 'Mars',
                    summary: 'Going to Mars',
                    content: 'Starting 2022',
                    footer: 'See you soon'
                }
            })
            .then(console.log)
            .catch(console.error);
    }
}