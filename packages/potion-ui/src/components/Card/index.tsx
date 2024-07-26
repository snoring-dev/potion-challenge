import { Button } from "../Button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";
import { Typography } from "../Typography";

const cardVariants = cva(
  "group flex flex-col rounded-xl border transition-all duration-300 cursor-pointer",
  {
    variants: {
      variant: {
        default: "border-white-active hover:shadow-sm",
        outlined: "border-gray-200 hover:border-gray-300",
        elevated: "border-transparent shadow-md hover:shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="rounded-full p-2 font-light text-xs border border-cloud-100 text-cloud-500">
    {children}
  </span>
);

const CardHeader = ({
  pictureUrl,
  title,
}: Pick<CardProps, "pictureUrl" | "title">) => (
  <header className="w-full aspect-square relative overflow-hidden">
    <img
      className="w-full h-full absolute inset-0 object-cover transition group-hover:scale-110 duration-300"
      alt={title}
      src={pictureUrl}
      loading="lazy"
    />
  </header>
);

const CardBody = ({ title, description, tags = [] }: Partial<CardProps>) => (
  <div className="overflow-hidden w-full p-6">
    <Typography variant="h4">{title}</Typography>
    <Typography variant="small" className="my-4">
      {description}
    </Typography>
    {tags?.length > 0 ? (
      <>
        <div className="bg-white-active w-full h-[1px]"></div>
        <div>
          <Typography
            variant="small"
            className="font-semibold text-xs uppercase my-2"
          >
            keywords:
          </Typography>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>
      </>
    ) : null}
  </div>
);

const CardFooter = ({
  primaryAction,
  secondaryAction,
}: Pick<CardProps, "primaryAction" | "secondaryAction">) => (
  <footer className="flex gap-2 overflow-hidden w-full px-6 pb-6">
    {primaryAction && (
      <Button
        label={primaryAction.label}
        onClick={primaryAction.onClick}
        variant="success"
      />
    )}
    {secondaryAction && (
      <Button
        label={secondaryAction.label}
        onClick={secondaryAction.onClick}
        variant="secondary"
      />
    )}
  </footer>
);

export interface CardProps extends VariantProps<typeof cardVariants> {
  pictureUrl: string;
  title: string;
  description?: string;
  tags?: string[];
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  width?: string | number;
}

export const Card: React.FC<CardProps> = ({
  width = "342px",
  variant,
  pictureUrl,
  title,
  description,
  tags,
  primaryAction,
  secondaryAction,
  className,
}) => {
  return (
    <article
      className={cn(cardVariants({ variant }), className)}
      style={{ width }}
    >
      {pictureUrl && <CardHeader pictureUrl={pictureUrl} title={title} />}
      <CardBody title={title} description={description} tags={tags} />
      <CardFooter
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
      />
    </article>
  );
};
