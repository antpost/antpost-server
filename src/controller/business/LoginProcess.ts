import { NextFunction, Request, Response } from "express";
import { BaseProcess } from "../base/BaseProcess";

export class LoginProcess extends BaseProcess {
    
    constructor(public req: Request, res: Response, options: Object) {   
        super(req, res, options);     
    }

    process() {
        console.log("hello LoginProcess");
    }
}