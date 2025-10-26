import { serve } from "@hono/node-server";
import { serverEnv } from "@repo/env/server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = Number(new URL(serverEnv.API_SERVER_URL).port);

serve({ fetch: app.fetch, port }, () => {
  console.log(`Server is running on ${serverEnv.API_SERVER_URL}`);
});
