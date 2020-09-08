import MailController from './lib/mail';

export const sendMail = async (event, context) => {
  MailController.sendMail();
  return;
};