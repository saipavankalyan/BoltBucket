import { useContext } from "react";
import ItemCard from "./ItemCard";
import { CurrentVehicleHook } from "../hooks/CurrentVehicleHook";
import "../css/ItemsBrochure.css";

const ItemsBrochure = ({ type, items, hoverProps, onDone }) => {
  const { currentVehicle, setVehicleField } = useContext(CurrentVehicleHook);

  return (
    <div className="items-brochure">
      <div className="items">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            hoverProps={[item.name, item.price]}
            validationFn={() => true}
            additionFn={(item) => setVehicleField(type, item.id)}
            clicked={item.id == currentVehicle[type]}
          />
        ))}
      </div>
      <button onClick={() => onDone()}>Done</button>
    </div>
  );
};

export default ItemsBrochure;
