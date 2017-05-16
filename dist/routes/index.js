"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const LoginProcess_1 = require("../controller/business/LoginProcess");
class IndexRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("[IndexRoute::create] Creating index route.");
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Home | Tour of Heros";
        let options = {
            "message": "Welcome to the tour of Heros"
        };
        this.switch(req, res, options);
        this.render(req, res, "index", options);
    }
    switch(req, res, options) {
        console.log("IP day: " + req.ip);
        console.log("CMD_ID: " + req.query.cmd_id);
        console.log("SESSION_ID: " + req.query.session_id);
        let cmd = req.param('cmd_id');
        if (cmd == '1') {
            new LoginProcess_1.LoginProcess(req, res, options).process();
        }
        else if (cmd == '2') {
        }
    }
}
exports.IndexRoute = IndexRoute;
