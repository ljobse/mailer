import Email from './email';
import ClassType from './classType';
import IMailProvider from './IMailProvider.interface';

export default class Mailer {
  public static initialize<TData>(provider: IMailProvider<TData>) {
    this.provider = provider;
  }

  public static async mail<T extends { language: string }>(type: ClassType<Email<T>>, to: string, body: T) {
    if (!this.provider) {
      throw new Error('Mailer was not initialized with a provider. Please call initialize before sending emails.');
    }

    const { subject, data } = await new type(body).generate();
    await this.provider.send(to, subject, data);
  }
  private static provider: IMailProvider<any>;
}
