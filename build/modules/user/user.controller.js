"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutes = void 0;
const user_schema_1 = require("./user.schema");
function setupRoutes(server, options, next) {
    server.get("/user", {
        schema: {
            response: {
                200: user_schema_1.ZodUser,
            },
        },
    }, (req, rep) => {
        req.log.info("Some info about the current request");
        const test = {
            name: "Tom",
            mail: "t@t.com",
            foo: "A"
        };
        rep.status(200).send(test);
    });
    server.get("/user/:id", {
        schema: {
            description: "get by id",
            response: {
                200: user_schema_1.UserRef,
            },
        },
    }, (req, rep) => {
        req.log.info("Some info about the current request");
        const test = {
            name: "Tom",
            mail: "t@t.com",
            foo: "A"
        };
        rep.status(200).send(test);
    });
    server.post("/user", {
        schema: {
            body: user_schema_1.UserRef,
            response: {
                200: user_schema_1.UserRef,
            },
        },
    }, (req, rep) => {
        req.log.info("Some info about the current request");
        rep.status(200).send(req.body);
    });
    next();
}
exports.setupRoutes = setupRoutes;
//# sourceMappingURL=user.controller.js.map