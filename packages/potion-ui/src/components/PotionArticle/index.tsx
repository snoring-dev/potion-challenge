import React from "react";
import { PotionMetrics, PotionMetricsProps } from "../PotionMetrics";
import { Typography } from "../Typography";
import { List, ListProps } from "../List";
import { ArticleHeader, ArticleHeaderProps } from "../ActicleHeader";

const Divider = () => (
  <div className="h-[1px] w-full bg-white-active my-6"></div>
);

export interface PotionArticleProps {
  headerProps: ArticleHeaderProps;
  imageUrl: string;
  imageAlt: string;
  metricsProps: PotionMetricsProps;
  description: string;
  ingredients: ListProps;
  instructions: ListProps;
  extraDetails?: string;
  isMobile?: boolean;
}

export const PotionArticle: React.FC<PotionArticleProps> = ({
  headerProps,
  imageUrl,
  imageAlt,
  metricsProps,
  description,
  ingredients,
  instructions,
  extraDetails,
  isMobile = false,
}) => {
  return (
    <article className="flex flex-col w-full">
      <ArticleHeader isMobile={isMobile} {...headerProps} />
      <Divider />
      <div className="flex aspect-square md:aspect-video">
        <img
          className="w-full h-full object-cover"
          alt={imageAlt}
          src={imageUrl}
          loading="lazy"
        />
      </div>
      <Divider />
      <div className="flex items-center justify-center">
        <PotionMetrics
          {...metricsProps}
        />
      </div>
      <div className="flex flex-col my-6">
        <Typography>{description}</Typography>
        <List className="py-6" title="Ingredients" useIcons {...ingredients} />
        <List className="py-6" title="Instructions" {...instructions} />
      </div>
      <footer>{extraDetails && <Typography>{extraDetails}</Typography>}</footer>
    </article>
  );
};
