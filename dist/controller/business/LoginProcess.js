"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseProcess_1 = require("../base/BaseProcess");
class LoginProcess extends BaseProcess_1.BaseProcess {
    constructor(req, res, options) {
        super(req, res, options);
        this.req = req;
    }
    process() {
        console.log("hello LoginProcess");
    }
}
exports.LoginProcess = LoginProcess;
