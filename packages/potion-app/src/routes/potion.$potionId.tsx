import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { getSinglePotion } from "../services/potion";
import { PotionArticle } from "potion-ui";
import { GiHealthPotion } from "react-icons/gi";
import { formatDate } from "../utils";
import { Metrics } from "../types/Metrics";
import { metricLabels } from "../utils/labels";

export const Route = createFileRoute("/potion/$potionId")({
  loader: ({ params }) => getSinglePotion(params.potionId),
  component: SinglePotionPage,
});

function SinglePotionPage() {
  const potion = useLoaderData({
    from: "/potion/$potionId",
  });

  if (!potion) {
    return <div>Potion not found!</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 p-4">
          <PotionArticle
            headerProps={{
              title: potion.title,
              date: formatDate(potion.creationDate),
              rating: potion.rating,
              energyLevel: potion.metrics.potency,
            }}
            description={potion.description}
            extraDetails={potion.details}
            imageAlt={potion.title}
            imageUrl={potion.mainImageUrl}
            ingredients={{
              items: [
                ...potion.ingredients.map((ing) => ({
                  label: ing.ingredient.name,
                  icon: GiHealthPotion,
                })),
              ],
              title: "Liste des ingrédients:",
              useIcons: true,
            }}
            instructions={{
              items: potion.instructions.map((inst) => ({ label: inst })),
              title: "Instructions:",
            }}
            metricsProps={{
              metrics: [
                ...Object.keys(potion.metrics)
                  .filter((k) => k !== "potency")
                  .map((key) => ({
                    name: metricLabels[key as keyof typeof metricLabels],
                    value: potion.metrics[key as keyof Metrics],
                  })),
              ],
            }}
          />
        </div>
        <div className="w-full md:w-1/3 p-4 bg-gray-100">
          <h2 className="text-xl font-bold mb-4">Right Panel</h2>
          <p>
            This is the right panel. It takes up 1/3 of the width on larger
            screens and full width on mobile.
          </p>
        </div>
      </div>
    </div>
  );
}
