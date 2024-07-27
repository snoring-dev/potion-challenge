import React from "react";
import { Typography } from "../Typography";
import { Rating } from "../Rating";
import { BsFire } from "react-icons/bs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const miniCardVariants = cva("group flex flex-row w-full cursor-pointer", {
  variants: {
    variant: {
      default: "bg-white",
      outlined: "border border-gray-200 rounded-md",
      elevated: "shadow-md rounded-md",
    },
    size: {
      default: "min-h-12",
      small: "min-h-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const ImageWrapper: React.FC<{
  src: string;
  alt: string;
  size?: "default" | "small";
}> = ({ src, alt, size = "default" }) => (
  <div
    className={cn(
      "aspect-auto relative overflow-hidden rounded-md",
      size === "default" ? "w-80 h-40" : "w-40 h-20"
    )}
  >
    <img
      className="w-full h-full absolute inset-0 object-cover transition group-hover:scale-110 duration-300"
      alt={alt}
      src={src}
      loading="lazy"
    />
  </div>
);

export interface MiniCardProps extends VariantProps<typeof miniCardVariants> {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  rating: number;
  energyLevel: string;
  className?: string;
}

export const MiniCard: React.FC<MiniCardProps> = ({
  variant,
  size,
  title,
  description,
  imageUrl,
  imageAlt,
  rating,
  energyLevel,
  className,
}) => (
  <div className={cn(miniCardVariants({ variant, size }), className)}>
    <ImageWrapper src={imageUrl} alt={imageAlt} size={size ?? 'default'} />
    <div className="w-full h-full pl-2">
      <Typography variant={size === "small" ? "h5" : "h4"}>{title}</Typography>
      <Rating rating={rating} />
      <div
        className={cn(
          "my-2 max-w-sm",
          size === "small" ? "line-clamp-2" : "line-clamp-3"
        )}
      >
        <Typography variant="small">{description}</Typography>
      </div>
      <div className="flex flex-row text-lg mt-2">
        <BsFire className="text-red-300" />
        <Typography className="text-red-300 font-semibold">
          {energyLevel}
        </Typography>
      </div>
    </div>
  </div>
);
