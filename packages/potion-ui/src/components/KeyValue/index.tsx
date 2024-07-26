export interface KeyValueProps {
  theKey: string;
  value: string;
}

export const KeyValue: React.FC<KeyValueProps> = ({ theKey, value }) => {
  return (
    <div className="flex justify-between">
      <span className="text-ink-50">{theKey}</span>
      <span className="font-medium text-ink-700">{value}</span>
    </div>
  );
}
