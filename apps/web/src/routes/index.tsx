import { clientEnv } from "@repo/env/client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <h1>Hello Tanstack-Start</h1>
      <p>{clientEnv.VITE_APP_URL}</p>
    </>
  );
}
