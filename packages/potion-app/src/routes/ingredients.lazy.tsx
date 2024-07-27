import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/ingredients")({
  component: Ingredients,
});

function Ingredients() {
  return <div className="p-2">List of all available ingredients</div>;
}
