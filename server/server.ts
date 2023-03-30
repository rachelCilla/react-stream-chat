import { config } from "dotenv";
config();

import fastify from "fastify";

const app = fastify();
// parseInt is used to convert the string to a number (since 'listen' expects a number)
// in TS, we can use the 'non-null assertion operator' (!) to tell TS that we are sure that the env variable is defined,even if its type suggests that it could be undefined
app.listen({ port: parseInt(process.env.PORT!) });
