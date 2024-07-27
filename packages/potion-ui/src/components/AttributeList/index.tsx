import { KeyValue } from "../KeyValue";
import { Typography } from "../Typography";

export interface Pair {
  key: string;
  value: string;
}

export interface AttributeListProps {
  title?: string;
  values: Pair[];
}

export const AttributeList: React.FC<AttributeListProps> = ({
  title,
  values,
}) => {
  return (
    <div className="p-6 max-w-80 w-full rounded-lg border border-gray-200 bg-green-50">
      {title && (
        <Typography variant="h2" className="text-lg font-semibold mb-4">
          {title}
        </Typography>
      )}
      <div className="space-y-2">
        {values.map((kv, index) => (
            <div key={index}>
              <KeyValue theKey={kv.key} value={kv.value} />
              {index < values.length - 1 && <div className="w-full h-[1px] bg-white-active my-2"></div>}
            </div>
        ))}
      </div>
    </div>
  );
};
