import { useNavigate } from "@tanstack/react-router";
import { Potion } from "../types/Potion";
import { AttributeList, MiniCard, PotionArticle, Typography } from "potion-ui";
import { formatDate } from "../utils";
import { GiHealthPotion } from "react-icons/gi";
import {
  magicalBrewStatsLabels,
  metricLabels,
  potionLabels,
} from "../utils/labels";
import { Metrics } from "../types/Metrics";
import { MagicalBrewStats } from "../types/MagicalBrewStats";

export default function PotionPageView({ potion }: { potion: Potion }) {
  const navigate = useNavigate();
  const redirectToPotion = (id: string) => navigate({ to: `/potion/${id}` });

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
        <div className="w-full md:w-1/3 p-4 xs:border-t sm:border-t md:border-t-0 md:border-l border-gray-200">
          <AttributeList
            className="w-full max-w-full"
            title={potionLabels.magicalBrewStats}
            values={[
              ...Object.keys(potion.magicalBrewStats).map((stat) => ({
                key: magicalBrewStatsLabels[
                  stat as keyof typeof magicalBrewStatsLabels
                ],
                value: potion.magicalBrewStats[stat as keyof MagicalBrewStats],
              })),
            ]}
          />
          <div className="py-6">
            <Typography variant="h3">Potions recommendés</Typography>
            <div className="bg-white-active h-[1px] my-1 mb-4"></div>
            {potion.suggestedPotions &&
              potion.suggestedPotions?.length > 0 &&
              potion.suggestedPotions.map((sp, index) => {
                const isLast =
                  index == (potion?.suggestedPotions?.length ?? 1) - 1;
                return (
                  <>
                    <MiniCard
                      description={sp.description}
                      energyLevel={sp.metrics.potency}
                      imageAlt={sp.title}
                      imageUrl={sp.thumbnailUrl}
                      rating={sp.rating}
                      title={sp.title}
                      onClick={() => redirectToPotion(sp.id)}
                    />
                    {!isLast && (
                      <div className="bg-white-active h-[1px] my-1"></div>
                    )}
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
