export default interface IMailProvider<TData> {
  new (from: { name: string; email: string }, replyTo: string): IMailProvider<
    TData
  >;

  send(
    to:
      | string
      | { name: string; email: string }
      | string[]
      | Array<{ name: string; email: string }>,
    subject: string,
    data: TData
  ): Promise<void>;
}
