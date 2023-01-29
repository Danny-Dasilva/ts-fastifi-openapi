"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const user = require("./modules/user/user.controller");
const user_schema_1 = require("./modules/user/user.schema");
const fastify_swagger_1 = require("fastify-swagger");
const server = (0, fastify_1.default)({
    logger: true,
});
server.addSchema(user_schema_1.UserObject);
const fastifySwaggerExtendedOptions = {
    routePrefix: "/documentation",
    openapi: {
        info: {
            title: "Test swagger",
            description: "testing the fastify swagger api",
            version: "0.1.0",
        },
        servers: [
            {
                url: "http://localhost:8000",
            },
        ],
    },
    uiConfig: {
        docExpansion: "full",
        deepLinking: false,
    },
    staticCSP: true,
    exposeRoute: true,
};
server.register(fastify_swagger_1.default, fastifySwaggerExtendedOptions);
server.get("/ping", async (request, reply) => {
    request.log.info("pong");
    return "pong\n";
});
server.register(user.setupRoutes);
server.listen(8000, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
//# sourceMappingURL=index.js.map