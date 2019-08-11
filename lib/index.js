"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("./email");
exports.Email = email_1.default;
const mailer_1 = require("./mailer");
const initialize = mailer_1.default.initialize;
exports.initialize = initialize;
const send = mailer_1.default.mail;
exports.send = send;
