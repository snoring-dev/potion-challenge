import { useCallback, useState } from "react";
import { List, ListEntry } from "../List";
import { InputField } from "../InputField";
import { Button } from "../Button";

export interface InstructionsFieldProps {
  onChange: (instructions: ListEntry[]) => void;
  title: string;
  placeholder?: string;
  buttonLabel: string;
}

export const InstructionsField: React.FC<InstructionsFieldProps> = ({
  onChange,
  title,
  placeholder,
  buttonLabel,
}) => {
  const [items, setItems] = useState<ListEntry[]>([]);
  const [fieldValue, setFieldValue] = useState("");

  const addInstruction = useCallback(() => {
    if (fieldValue.trim()) {
      const newItems = [...items, { label: fieldValue.trim() }];
      setItems(newItems);
      onChange(newItems);
      setFieldValue("");
    }
  }, [fieldValue, items, onChange]);

  return (
    <div className="flex flex-col space-y-4">
      {items.length > 0 && <List items={[...items]} />}
      <div className="flex flex-col space-y-2">
        <InputField
          onChange={(e) => setFieldValue(e.target.value)}
          value={fieldValue}
          placeholder={placeholder}
          size="small"
          label={title}
        />
        <Button
          label={buttonLabel}
          variant="secondary"
          size="small"
          onClick={addInstruction}
        />
      </div>
    </div>
  );
};
