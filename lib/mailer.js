"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Mailer {
    static initialize(provider) {
        this.provider = provider;
    }
    static mail(type, to, body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.provider) {
                throw new Error('Mailer was not initialized with a provider. Please call initialize before sending emails.');
            }
            const { subject, data } = yield new type(body).generate();
            yield this.provider.send(to, subject, data);
        });
    }
}
exports.default = Mailer;
