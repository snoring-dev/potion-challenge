import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/potion/$potionId")({
  component: PotionArticle,
});

function PotionArticle() {
  const { potionId } = Route.useParams();
  return <div>Potion ID: {potionId}</div>;
}
