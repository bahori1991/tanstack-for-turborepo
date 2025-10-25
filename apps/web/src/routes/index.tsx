import { Button } from "@repo/ui/components/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <h1>Hello Tanstack-Start</h1>
      <Button>click!</Button>
    </>
  );
}
