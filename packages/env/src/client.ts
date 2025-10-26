/// <reference types="vite/client" />

import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const clientEnv = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_APP_URL: z.url(),
  },
  runtimeEnv: {
    VITE_APP_URL: import.meta.env.VITE_APP_URL,
  },
});
