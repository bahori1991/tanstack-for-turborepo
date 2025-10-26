import { serve } from "@hono/node-server";
import { serverEnv } from "@repo/env/server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve({ fetch: app.fetch, port: serverEnv.API_PORT }, () => {
  console.log(`Server is running on ${serverEnv.API_URL}`);
});
