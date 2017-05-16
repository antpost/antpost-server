"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseProcess {
    constructor(req, res, options) {
        this.req = req;
        this.res = res;
        this.options = options;
    }
}
exports.BaseProcess = BaseProcess;
