import { IconButton, Typography } from "potion-ui";
import { useCallback, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { updateInventory } from "../services/ingredient";

export const IngredientInventory: React.FC<{
  value: number;
  id: string;
}> = ({ value, id }) => {
  const [stock, setStock] = useState(value);

  const increment = useCallback(async () => {
    setStock(mStock => mStock + 1);
    try {
      await updateInventory(id, stock + 1);
    } catch (err) {
      console.log(err);
    }
  }, [id, stock]);

  const decrement = useCallback(async () => {
    setStock(mStock => mStock - 1);
    try {
      await updateInventory(id, stock - 1);
    } catch (err) {
      console.log(err);
    }
  }, [id, stock]);

  return (
    <div className="flex flex-row border border-gray-200 rounded-md p-1 w-fit">
      <IconButton
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
