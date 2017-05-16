import { Request, Response, Router } from "express";
export abstract class BaseProcess {
        protected req: Request;
        protected res: Response;
        protected options: Object;
        constructor(req: Request, res: Response, options: Object) {
                this.req = req;
                this.res = res;
                this.options = options;
        }
}