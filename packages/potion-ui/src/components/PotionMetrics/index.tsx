import React from "react";
import { Typography } from "../Typography";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const potionMetricsVariants = cva("flex flex-wrap justify-center", {
  variants: {
    layout: {
      horizontal: "sm:flex-row",
      vertical: "flex-col",
    },
    spacing: {
      default: "gap-4",
      compact: "gap-2",
      wide: "gap-6 sm:gap-8",
    },
  },
  defaultVariants: {
    layout: "horizontal",
    spacing: "default",
  },
});

interface MetricProps {
  name: string;
  value: string | number;
}

type DividerLayout = "horizontal" | "vertical";

const Metric: React.FC<MetricProps> = ({ name, value }) => (
  <div className="flex flex-col items-center justify-center">
    <Typography variant="small" className="text-ink-50 text-xs sm:text-sm">
      {name}
    </Typography>
    <Typography className="text-ink-800 font-semibold text-sm sm:text-base">
      {value}
    </Typography>
  </div>
);

const Divider: React.FC<{ layout?: DividerLayout }> = ({
  layout = "horizontal",
}) => (
  <div
    className={cn(
      "bg-ink-50/20",
      layout === "horizontal"
        ? "w-[2px] h-8 sm:h-12 mx-4 sm:mx-8 lg:mx-16 relative top-1"
        : "h-[2px] w-full my-2 sm:my-4"
    )}
  />
);

export interface PotionMetricsProps
  extends VariantProps<typeof potionMetricsVariants> {
  metrics: MetricProps[];
  className?: string;
}

export const PotionMetrics: React.FC<PotionMetricsProps> = ({
  layout,
  spacing,
  metrics,
  className,
}) => {
  return (
    <div className={cn(potionMetricsVariants({ layout, spacing }), className)}>
      {metrics.map((metric, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Divider layout={layout as DividerLayout} />}
          <Metric name={metric.name} value={metric.value} />
        </React.Fragment>
      ))}
    </div>
  );
};
