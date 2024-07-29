import React from "react";
import { Typography } from "../Typography";
import { Rating } from "../Rating";
import { BsFire } from "react-icons/bs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const miniCardVariants = cva(
  "group overflow-hidden flex flex-col md:flex-row lg:flex-row xl:flex-row w-full cursor-pointer",
  {
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
  }
);

const ImageWrapper: React.FC<{
  src: string;
  alt: string;
  size?: "default" | "small";
}> = ({ src, alt, size = "default" }) => (
  <div
    className={cn(
      "w-full relative overflow-hidden rounded-md",
      size === "default" ? "md:w-80 h-48 md:h-40" : "md:w-40 h-32 md:h-20"
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
  onClick?: () => void;
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
  onClick = () => {},
}) => (
  <div
    className={cn(miniCardVariants({ variant, size }), className)}
    onClick={onClick}
  >
    <ImageWrapper src={imageUrl} alt={imageAlt} size={size ?? "default"} />
    <div className="w-full h-full mt-2 md:mt-0 md:pl-2">
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
