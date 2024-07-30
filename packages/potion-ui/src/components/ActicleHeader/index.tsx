import React from "react";
import { BsFire, BsCalendar3 } from "react-icons/bs";
import { Rating } from "../Rating";
import { Typography } from "../Typography";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const articleHeaderVariants = cva("flex flex-col", {
  variants: {
    variant: {
      default: "",
      compact: "space-y-2",
      expanded: "space-y-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Divider: React.FC = () => (
  <div className="bg-cloud-500 w-[1px] h-6 mx-6 relative top-1" />
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
  <div className={cn("flex flex-row gap-1 text-lg mt-2", className)}>
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
  isMobile?: boolean;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  variant,
  title,
  date,
  energyLevel,
  rating,
  className,
  isMobile = false,
}) => {
  return (
    <header className={cn(articleHeaderVariants({ variant }), className)}>
      <Typography variant="h1">{title}</Typography>
      <div
        className={cn(
          "flex",
          isMobile
            ? "flex-col items-start justify-start"
            : "flex-row items-center"
        )}
      >
        <MetadataItem
          icon={<BsCalendar3 className="text-red-300" />}
          text={date}
          className="text-red-300"
        />
        {!isMobile && <Divider />}
        <MetadataItem
          icon={<BsFire className="text-red-300" />}
          text={energyLevel}
          className="text-red-300 font-semibold"
        />
        {!isMobile && <Divider />}
        <div className="relative top-1">
          <Rating rating={rating} className="text-red-300" />
        </div>
      </div>
    </header>
  );
};
