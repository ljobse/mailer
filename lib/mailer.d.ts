import Email from './email';
import ClassType from './classType';
import IMailProvider from './IMailProvider.interface';
export default class Mailer {
    static initialize<TData>(provider: IMailProvider<TData>): void;
    static mail<T extends {
        language: string;
    }>(type: ClassType<Email<T>>, to: string, body: T): Promise<void>;
    private static provider;
}
