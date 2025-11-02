import { clientEnv } from "@repo/env/client";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const getTime = createServerFn({ method: "GET" }).handler(async () => {
  const response = await fetch(`${clientEnv.VITE_API_SERVER_URL}/time`);
  return response.text();
});

const timeQuery = queryOptions({
  queryKey: ["time"],
  queryFn: () => getTime(),
  staleTime: 1000 * 5,
  gcTime: 1000 * 10,
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: ({ context }) => context.queryClient.fetchQuery(timeQuery),
});

function Home() {
  const context = useRouteContext({ from: Route.id });
  const queryClient = context.queryClient;
  const { data: currentTime } = useQuery(timeQuery);
  return (
    <>
      <h1>Hello Tanstack-Start</h1>
      <p>currentTime: {currentTime}</p>
      <button
        type="button"
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => {
          queryClient.refetchQueries({ queryKey: ["time"], type: "active" });
        }}
      >
        update time
      </button>
    </>
  );
}
