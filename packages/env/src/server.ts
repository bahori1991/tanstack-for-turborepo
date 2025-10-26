import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const serverEnv = createEnv({
  server: {
    API_SERVER_URL: z.url(),
  },
  runtimeEnv: {
    API_SERVER_URL: process.env.API_SERVER_URL,
  },
});
