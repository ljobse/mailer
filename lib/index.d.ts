import Email from './email';
import IMailProvider from './IMailProvider.interface';
import Mailer from './mailer';
declare const initialize: typeof Mailer.initialize;
declare const send: typeof Mailer.mail;
export { send, initialize, Email, IMailProvider };
