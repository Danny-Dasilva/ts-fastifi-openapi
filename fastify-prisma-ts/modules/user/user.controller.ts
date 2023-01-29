import { FastifyInstance } from "fastify";
import { UserType, UserRef } from "./user.schema";

export function setupRoutes(server: FastifyInstance, options: any, next: any) {
  server.post<{ Body: UserType; Reply: UserType }>(
    "/user",
    {
      schema: {
        body: UserRef,
        response: {
          200: UserRef,
        },
      },
    },
    (req, rep) => {
      req.log.info("Some info about the current request");
      rep.status(200).send(req.body);
    }
  );

  next();
}
