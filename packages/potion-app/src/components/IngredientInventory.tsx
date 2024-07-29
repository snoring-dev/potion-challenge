import { IconButton, Typography } from "potion-ui";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { updateInventory } from "../services/ingredient";
import { useDebounce } from "@uidotdev/usehooks";

export const IngredientInventory: React.FC<{
  value: number;
  id: string;
}> = ({ value, id }) => {
  const [stock, setStock] = useState(value);
  const inventoryValue = useDebounce(stock, 500);
  const initialRender = useRef(true);

  useEffect(() => {
    const updateStock = async () => {
      try {
        await updateInventory(id, inventoryValue);
      } catch (err) {
        console.log(err);
      }
    };

    if (initialRender.current) {
      initialRender.current = false;
    } else if (inventoryValue !== value) {
      updateStock();
    }
  }, [id, inventoryValue, value]);

  const increment = useCallback(() => setStock((prev) => prev + 1), []);
  const decrement = useCallback(
    () => setStock((prev) => Math.max(0, prev - 1)),
    []
  );

  return (
    <div className="flex flex-row border border-gray-200 rounded-md p-1 w-fit">
      <IconButton
        disabled={stock <= 0}
        variant="secondary"
        className="w-9 h-9"
        icon={FaMinus}
        onClick={decrement}
      />
      <div className="flex items-center justify-center w-9 h-9 px-8">
        <Typography className="font-semibold">{stock}</Typography>
      </div>
      <IconButton
        variant="secondary"
        className="w-9 h-9"
        icon={FaPlus}
        onClick={increment}
      />
    </div>
  );
};
