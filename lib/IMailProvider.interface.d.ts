import ClassType from './classType';
export default interface IMailProvider<TData> {
    new (from: {
        name: string;
        email: string;
    }, replyTo: string, dataType: ClassType<TData>): IMailProvider<TData>;
    send(to: string | {
        name: string;
        email: string;
    } | string[] | Array<{
        name: string;
        email: string;
    }>, subject: string, data: TData): Promise<void>;
}
