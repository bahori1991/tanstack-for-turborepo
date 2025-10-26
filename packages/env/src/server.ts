import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const serverEnv = createEnv({
  server: {
    API_PORT: z.number().default(8080),
    API_URL: z.url(),
  },
  runtimeEnv: {
    API_PORT: process.env.API_PORT,
    API_URL: `http://localhost:${process.env.API_PORT ?? 8080}`,
  },
});
