import React from "react";
import { Description, Field, Input, Label } from "@headlessui/react";
import { Typography } from "../Typography";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const inputVariants = cva(
  "flex flex-row space-x-2 items-center justify-center rounded-[3px] transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-white text-ink-50 border border-cloud-700 focus:text-ink-300 focus:border-blue-300 focus-within:border-blue-300 focus-within:shadow-input",
      },
      size: {
        normal: "px-3 py-3 text-base mt-1 w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "normal",
    },
  }
);

export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

export const InputField: React.FC<InputFieldProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <Field>
      <Label className="data-[disabled]:opacity-50">
        <Typography className="font-semibold text-base text-ink-700">
          Field label
        </Typography>
      </Label>
      <Description className="data-[disabled]:opacity-50">
        <Typography variant="small" className="text-ink-100">
          Use your real name so people will recognize you.
        </Typography>
      </Description>
      <div className={cn(inputVariants({ variant, size, className }))}>
        <div className="w-5 h-5 bg-slate-700" />
        <Input
          {...props}
          name="full_name"
          placeholder="Mohammed"
          className="w-full focus:outline-none"
        />
        <div className="w-5 h-5 bg-slate-700" />
      </div>
      <Description className="data-[disabled]:opacity-50">
        <Typography variant="small" className="text-red-300">
          you entered a non valid name!
        </Typography>
      </Description>
    </Field>
  );
};
