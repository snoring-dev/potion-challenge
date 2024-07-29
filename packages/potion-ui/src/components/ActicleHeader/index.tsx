import React from "react";
import { BsFire, BsCalendar3 } from "react-icons/bs";
import { Rating } from "../Rating";
import { Typography } from "../Typography";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const articleHeaderVariants = cva("flex flex-col", {
  variants: {
    variant: {
      default: "space-y-2 md:space-y-4",
      compact: "space-y-2",
      expanded: "space-y-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Divider: React.FC = () => (
  <div className="hidden md:block bg-cloud-500 w-[1px] h-6 mx-2 md:mx-6 relative top-1" />
);

interface MetadataItemProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const MetadataItem: React.FC<MetadataItemProps> = ({
  icon,
  text,
  className,
}) => (
  <div
    className={cn(
      "flex flex-row items-center gap-1 text-base md:text-lg",
      className
    )}
  >
    {icon}
    <Typography variant="small" className="font-light">
      {text}
    </Typography>
  </div>
);

export interface ArticleHeaderProps
  extends VariantProps<typeof articleHeaderVariants> {
  title: string;
  date: string;
  energyLevel: string;
  rating: number;
  className?: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  variant,
  title,
  date,
  energyLevel,
  rating,
  className,
}) => {
  return (
    <header className={cn(articleHeaderVariants({ variant }), className)}>
      <Typography variant="h1" className="text-2xl md:text-3xl lg:text-4xl">
        {title}
      </Typography>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0">
        <MetadataItem
          icon={<BsCalendar3 className="text-red-300" />}
          text={date}
          className="text-red-300"
        />
        <Divider />
        <MetadataItem
          icon={<BsFire className="text-red-300" />}
          text={energyLevel}
          className="text-red-300 font-semibold"
        />
        <Divider />
        <div className="sm:relative sm:top-1">
          <Rating rating={rating} className="text-red-300" />
        </div>
      </div>
    </header>
  );
};
