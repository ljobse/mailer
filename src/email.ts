import { Translator, TranslatorParam } from 'translator';

abstract class Email<T extends { language: string }> {
  public data: T;
  public subject: string = '';
  private translator: Translator;

  constructor(data: T) {
    this.data = data;
    this.translator = new Translator(data.language);
  }

  public async setTranslatedSubject(translationKeyPath: string, ...params: TranslatorParam[]) {
    this.subject = await this.translator.get(translationKeyPath, ...params);
  }

  public abstract generate(): Promise<{ subject: string; data: T }>;
}

export default Email;
