import Email from './email';
import IMailProvider from './IMailProvider.interface';
import Mailer from './mailer';

const initialize = Mailer.initialize;
const send = Mailer.mail;

export { send, initialize, Email, IMailProvider };
