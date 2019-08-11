import { TranslatorParam } from 'translator';
declare abstract class Email<T extends {
    language: string;
}> {
    data: T;
    subject: string;
    private translator;
    constructor(data: T);
    setTranslatedSubject(translationKeyPath: string, ...params: TranslatorParam[]): Promise<void>;
    abstract generate(): Promise<{
        subject: string;
        data: T;
    }>;
}
export default Email;
