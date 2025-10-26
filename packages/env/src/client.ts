/// <reference types="vite/client" />

import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const clientEnv = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_APPLICATION_URL: z.url(),
    VITE_API_SERVER_URL: z.url(),
  },
  runtimeEnv: {
    VITE_APPLICATION_URL: import.meta.env.VITE_APPLICATION_URL,
    VITE_API_SERVER_URL: import.meta.env.VITE_API_SERVER_URL,
  },
});
