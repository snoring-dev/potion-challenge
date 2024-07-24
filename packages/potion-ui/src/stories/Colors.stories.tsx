import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { cn } from "../lib";
import { Typography } from "../components/Typography";

const meta: Meta = {
  title: "Design System/Colors",
};

export default meta;
type Story = StoryObj;

const palette = [
  {
    name: "White",
    textColors: ["text-sky-900", "text-sky-900"],
    colors: [
      {
        colorClass: "bg-white",
        shade: "default",
        hex: "#FFFFFF",
        hasBorder: true,
      },
      {
        colorClass: "bg-white-hover",
        shade: "hover",
        hex: "#F1F4F7",
        hasBorder: true,
      },
      {
        colorClass: "bg-white-active",
        shade: "active",
        hex: "#E7ECF1",
        hasBorder: true,
      },
    ],
  },
  {
    name: "Cloud",
    textColors: ["text-sky-900", "text-cyan-600"],
    colors: [
      {
        colorClass: "bg-cloud-50",
        shade: "50",
        hex: "#F5F7F9",
        hasBorder: false,
      },
      {
        colorClass: "bg-cloud-100",
        shade: "100",
        hex: "#E5EAEF",
        hasBorder: false,
      },
      {
        colorClass: "bg-cloud-200",
        shade: "200",
        hex: "#D6DEE6",
        hasBorder: false,
      },
      {
        colorClass: "bg-cloud-300",
        shade: "300",
        hex: "#E8EDF1",
        hasBorder: false,
      },
      {
        colorClass: "bg-cloud-400",
        shade: "400",
        hex: "#DCE3E9",
        hasBorder: false,
      },
      {
        colorClass: "bg-cloud-500",
        shade: "500",
        hex: "#CAD4DE",
        hasBorder: false,
      },
      {
        colorClass: "bg-cloud-600",
        shade: "600",
        hex: "#BAC7D5",
        hasBorder: false,
      },
      {
        colorClass: "bg-cloud-700",
        shade: "700",
        hex: "#A6B6C8",
        hasBorder: false,
      },
      {
        colorClass: "bg-cloud-800",
        shade: "800",
        hex: "#94A8BE",
        hasBorder: false,
      },
    ],
  },
  {
    name: "Ink",
    textColors: ["text-white", "text-cyan-200"],
    colors: [
      {
        colorClass: "bg-ink-50",
        shade: "50",
        hex: "#697D95",
        hasBorder: false,
      },
      {
        colorClass: "bg-ink-100",
        shade: "100",
        hex: "#5D738E",
        hasBorder: false,
      },
      {
        colorClass: "bg-ink-200",
        shade: "200",
        hex: "#4A617C",
        hasBorder: false,
      },
      {
        colorClass: "bg-ink-300",
        shade: "300",
        hex: "#4F5E71",
        hasBorder: false,
      },
      {
        colorClass: "bg-ink-400",
        shade: "400",
        hex: "#3E4E63",
        hasBorder: false,
      },
      {
        colorClass: "bg-ink-500",
        shade: "500",
        hex: "#324256",
        hasBorder: false,
      },
      {
        colorClass: "bg-ink-600",
        shade: "600",
        hex: "#252A31",
        hasBorder: false,
      },
      {
        colorClass: "bg-ink-700",
        shade: "700",
        hex: "#181B20",
        hasBorder: false,
      },
      {
        colorClass: "bg-ink-800",
        shade: "800",
        hex: "#0B0C0F",
        hasBorder: false,
      },
    ],
  },
  {
    name: "Red",
    textColors: ["text-white", "text-black"],
    colors: [
      {
        colorClass: "bg-red-50",
        shade: "50",
        hex: "#FCF3F3",
        hasBorder: false,
      },
      {
        colorClass: "bg-red-100",
        shade: "100",
        hex: "#F8E2E2",
        hasBorder: false,
      },
      {
        colorClass: "bg-red-200",
        shade: "200",
        hex: "#F3CECE",
        hasBorder: false,
      },
      {
        colorClass: "bg-red-300",
        shade: "300",
        hex: "#D21C1C",
        hasBorder: false,
      },
      {
        colorClass: "bg-red-400",
        shade: "400",
        hex: "#B91919",
        hasBorder: false,
      },
      {
        colorClass: "bg-red-500",
        shade: "500",
        hex: "#9D1515",
        hasBorder: false,
      },
      {
        colorClass: "bg-red-600",
        shade: "600",
        hex: "#970C0C",
        hasBorder: false,
      },
      {
        colorClass: "bg-red-700",
        shade: "700",
        hex: "#890B0B",
        hasBorder: false,
      },
      {
        colorClass: "bg-red-800",
        shade: "800",
        hex: "#6D0909",
        hasBorder: false,
      },
      {
        colorClass: "bg-red-900",
        shade: "900",
        hex: "#760909",
        hasBorder: false,
      },
    ],
  },
  {
    name: "Blue",
    textColors: ["text-white", "text-black"],
    colors: [
      {
        colorClass: "bg-blue-50",
        shade: "50",
        hex: "#F1F8FE",
        hasBorder: false,
      },
      {
        colorClass: "bg-blue-100",
        shade: "100",
        hex: "#DEF0FC",
        hasBorder: false,
      },
      {
        colorClass: "bg-blue-200",
        shade: "200",
        hex: "#C7E4FA",
        hasBorder: false,
      },
      {
        colorClass: "bg-blue-300",
        shade: "300",
        hex: "#0172CB",
        hasBorder: false,
      },
      {
        colorClass: "bg-blue-400",
        shade: "400",
        hex: "#0161AC",
        hasBorder: false,
      },
      {
        colorClass: "bg-blue-500",
        shade: "500",
        hex: "#01508E",
        hasBorder: false,
      },
      {
        colorClass: "bg-blue-600",
        shade: "600",
        hex: "#005AA3",
        hasBorder: false,
      },
      {
        colorClass: "bg-blue-700",
        shade: "700",
        hex: "#004F8F",
        hasBorder: false,
      },
      {
        colorClass: "bg-blue-800",
        shade: "800",
        hex: "#003E70",
        hasBorder: false,
      },
      {
        colorClass: "bg-blue-900",
        shade: "900",
        hex: "#004680",
        hasBorder: false,
      },
    ],
  },
  {
    name: "Green",
    textColors: ["text-white", "text-black"],
    colors: [
      {
        colorClass: "bg-green-50",
        shade: "50",
        hex: "#F2F8F2",
        hasBorder: false,
      },
      {
        colorClass: "bg-green-100",
        shade: "100",
        hex: "#E1EFE2",
        hasBorder: false,
      },
      {
        colorClass: "bg-green-200",
        shade: "200",
        hex: "#CDE4CF",
        hasBorder: false,
      },
      {
        colorClass: "bg-green-300",
        shade: "300",
        hex: "#28A138",
        hasBorder: false,
      },
      {
        colorClass: "bg-green-400",
        shade: "400",
        hex: "#238B31",
        hasBorder: false,
      },
      {
        colorClass: "bg-green-500",
        shade: "500",
        hex: "#1D7228",
        hasBorder: false,
      },
      {
        colorClass: "bg-green-600",
        shade: "600",
        hex: "#2D7738",
        hasBorder: false,
      },
      {
        colorClass: "bg-green-700",
        shade: "700",
        hex: "#276831",
        hasBorder: false,
      },
      {
        colorClass: "bg-green-800",
        shade: "800",
        hex: "#1F5126",
        hasBorder: false,
      },
      {
        colorClass: "bg-green-900",
        shade: "900",
        hex: "#235C2B",
        hasBorder: false,
      },
    ],
  },
  {
    name: "Orange",
    textColors: ["text-white", "text-black"],
    colors: [
      {
        colorClass: "bg-orange-50",
        shade: "50",
        hex: "#FEF7F1",
        hasBorder: false,
      },
      {
        colorClass: "bg-orange-100",
        shade: "100",
        hex: "#FCECDA",
        hasBorder: false,
      },
      {
        colorClass: "bg-orange-200",
        shade: "200",
        hex: "#FAE2C6",
        hasBorder: false,
      },
      {
        colorClass: "bg-orange-300",
        shade: "300",
        hex: "#DF7B00",
        hasBorder: false,
      },
      {
        colorClass: "bg-orange-400",
        shade: "400",
        hex: "#C96F00",
        hasBorder: false,
      },
      {
        colorClass: "bg-orange-500",
        shade: "500",
        hex: "#B26200",
        hasBorder: false,
      },
      {
        colorClass: "bg-orange-600",
        shade: "600",
        hex: "#BA5D00",
        hasBorder: false,
      },
      {
        colorClass: "bg-orange-700",
        shade: "700",
        hex: "#A75400",
        hasBorder: false,
      },
      {
        colorClass: "bg-orange-800",
        shade: "800",
        hex: "#954a00",
        hasBorder: false,
      },
      {
        colorClass: "bg-orange-900",
        shade: "900",
        hex: "#803F00",
        hasBorder: false,
      },
    ],
  },
  {
    name: "Product",
    textColors: ["text-white", "text-black"],
    colors: [
      {
        colorClass: "bg-product-50",
        shade: "50",
        hex: "#ECF8F7",
        hasBorder: false,
      },
      {
        colorClass: "bg-product-100",
        shade: "100",
        hex: "#D6F0EC",
        hasBorder: false,
      },
      {
        colorClass: "bg-product-200",
        shade: "200",
        hex: "#BFE8E2",
        hasBorder: false,
      },
      {
        colorClass: "bg-product-300",
        shade: "300",
        hex: "#00A58E",
        hasBorder: false,
      },
      {
        colorClass: "bg-product-400",
        shade: "400",
        hex: "#009580",
        hasBorder: false,
      },
      {
        colorClass: "bg-product-500",
        shade: "500",
        hex: "#008472",
        hasBorder: false,
      },
      {
        colorClass: "bg-product-600",
        shade: "600",
        hex: "#007F6D",
        hasBorder: false,
      },
      {
        colorClass: "bg-product-700",
        shade: "700",
        hex: "#007060",
        hasBorder: false,
      },
      {
        colorClass: "bg-product-800",
        shade: "800",
        hex: "#006657",
        hasBorder: false,
      },
      {
        colorClass: "bg-product-900",
        shade: "900",
        hex: "#005C4E",
        hasBorder: false,
      },
    ],
  },
];

type ColorProps = {
  colorClass: string;
  shade: string;
  hex: string;
  hasBorder?: boolean;
  textColor?: string;
};

const Color = ({
  colorClass,
  shade,
  hex,
  hasBorder = false,
  textColor = "text-white",
}: ColorProps) => {
  return (
    <div
      className={cn(
        hasBorder ? "border border-gray-100" : "",
        "flex flex-col items-center relative rounded-lg overflow-hidden"
      )}
    >
      <div className={cn(colorClass, "w-[100px] h-[100px] rounded-sm")}></div>
      <Typography
        variant="p"
        className={cn(textColor, "mt-2 absolute bottom-6")}
      >
        {shade}
      </Typography>
      <Typography
        variant="small"
        className={cn(
          textColor,
          "text-opacity-80 text-[12px] tracking-widest font-light absolute bottom-2"
        )}
      >
        {hex}
      </Typography>
    </div>
  );
};

export const ColorPalette: Story = {
  render: () => {
    return (
      <>
        {palette.map((entry) => {
          return (
            <section className="py-6">
              <Typography variant="h4" className="mb-2">
                {entry.name}
              </Typography>
              <div className="flex flex-wrap gap-2 justify-start">
                {entry.colors.map((c, i) => (
                  <Color
                    key={c.shade}
                    colorClass={c.colorClass}
                    hex={c.hex}
                    shade={c.shade}
                    hasBorder={c.hasBorder}
                    textColor={i <= entry.colors.length / 3 ? entry.textColors[1] : entry.textColors[0]}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </>
    );
  },
};
