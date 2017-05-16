import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { LoginProcess } from "../controller/business/LoginProcess";

export class IndexRoute extends BaseRoute {
    public static create(router: Router) {
        //log
        console.log("[IndexRoute::create] Creating index route.");

        //add home page route
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });
    }

    constructor () {
        super();
    }

    public index(req: Request, res: Response, next: NextFunction) {
        this.title = "Home | Tour of Heros";
        let options: Object = { 
            "message": "Welcome to the tour of Heros"
        }
        
        this.switch(req,res,options);

        this.render(req, res, "index", options);
    }

    private switch(req: Request, res: Response, options: Object) {
        console.log("IP day: " + req.ip);
        console.log("CMD_ID: " + req.query.cmd_id);
        console.log("SESSION_ID: " + req.query.session_id);

        let cmd = req.param('cmd_id');
        if (cmd == '1') {
            new LoginProcess(req, res, options).process();
        } else if(cmd == '2') {

        }
    }
}