import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { fetchPotions } from "../services/potion";
import { Potion as PotionType } from "../types/Potion";
import { PotionList } from "../components/PotionList";

export const Route = createFileRoute("/")({
  loader: () => fetchPotions(),
  component: HomePage,
  pendingComponent: () => "Chargement des données...",
});

function HomePage() {
  const potions = useLoaderData({
    from: "/",
    select: (data: unknown): PotionType[] => data as PotionType[],
  });

  return <PotionList potions={potions} />;
}
