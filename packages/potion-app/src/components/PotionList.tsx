import React from "react";
import { Card, Typography } from "potion-ui";
import { Potion } from "../types/Potion";

interface PotionListProps {
  potions: Potion[];
}

export const PotionList: React.FC<PotionListProps> = ({ potions }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Typography
          variant="h1"
          className="text-center mb-8 text-3xl sm:text-4xl lg:text-5xl"
        >
          List of available potions
        </Typography>

        {Array.isArray(potions) && potions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {potions.map((potion) => (
              <div key={potion.id} className="flex justify-center">
                <Card
                  variant="elevated"
                  pictureUrl={potion.thumbnailUrl}
                  title={potion.title}
                  description={potion.description}
                  tags={potion.tags.map((t) => `#${t}`)}
                  primaryAction={{
                    label: "Discover",
                    onClick: () =>
                      console.log(`should go to page: /potion/${potion.id}`),
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <Typography variant="h2" className="text-center text-gray-500">
            No potions available
          </Typography>
        )}
      </div>
    </div>
  );
};
