import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { getSinglePotion } from "../services/potion";
import PotionPageView from "../components/PotionView";
import LoadingState from "../components/LoadingState";

export const Route = createFileRoute("/potion/$potionId")({
  loader: ({ params }) => getSinglePotion(params.potionId),
  pendingComponent: () => <LoadingState />,
  component: SinglePotionPage,
});

function SinglePotionPage() {
  const potion = useLoaderData({
    from: "/potion/$potionId",
  });

  if (!potion) {
    return <div>Potion not found!</div>;
  }

  return <PotionPageView potion={potion} />;
}
