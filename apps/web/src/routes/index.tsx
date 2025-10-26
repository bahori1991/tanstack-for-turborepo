import { clientEnv } from "@repo/env/client";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const getHello = createServerFn({ method: "GET" }).handler(async () => {
  const response = await fetch(clientEnv.VITE_API_SERVER_URL);
  return response.text();
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getHello(),
});

function Home() {
  const hello = Route.useLoaderData();
  return (
    <>
      <h1>Hello Tanstack-Start</h1>
      <p>{hello}</p>
    </>
  );
}
