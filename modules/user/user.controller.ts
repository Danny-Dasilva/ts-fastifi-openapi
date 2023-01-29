import { FastifyInstance } from "fastify";
import { UserType, UserRef } from "./user.schema";

export function setupRoutes(server: FastifyInstance, options: any, next: any) {
  server.get<{ Body: UserType; Reply: UserType }>(
    "/user",
    {
      schema: {
        response: {
          200: UserRef,
        },
      },
    },
    (req, rep) => {
      req.log.info("Some info about the current request");
      const test: UserType = { 
          name:"Tom", 
          mail:"t@t.com",
          foo:"A" 

      }; 
      rep.status(200).send(test);
    }
  )
  server.get<{ Body: UserType; Reply: UserType }>(
    "/user/:id",
    {
      schema: {
        description: "get by id",
        response: {
          200: UserRef,
        },
      },
    },
    (req, rep) => {
      req.log.info("Some info about the current request");
      const test: UserType = { 
          name:"Tom", 
          mail:"t@t.com",
          foo:"A" 

      }; 
      rep.status(200).send(test);
    }
  );
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
