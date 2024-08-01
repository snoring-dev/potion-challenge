import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import PotionPageView from "../components/PotionView";
import { getRandomPotion } from "../services/potion";
import LoadingState from "../components/LoadingState";

export const Route = createFileRoute("/random-potion")({
  loader: () => getRandomPotion(),
  component: RandomPotionPage,
  pendingComponent: () => <LoadingState />,
});

function RandomPotionPage() {
  const potion = useLoaderData({
    from: "/random-potion",
  });

  if (!potion) {
    return <div>Potion not found!</div>;
  }

  return <PotionPageView potion={potion} />;
}
