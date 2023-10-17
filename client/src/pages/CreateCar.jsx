import React, { useContext, useState } from "react";
import "../App.css";
import "../css/CreateCar.css";
import ItemsBrochure from "../components/ItemsBrochure";
import { CurrentVehicleHook } from "../hooks/CurrentVehicleHook";
import { createCar as createCarService } from "../services/carsAPI.jsx";

const CreateCar = () => {
  const {
    currentVehicle,
    setVehicleField,
    constants: { exteriors, roofs, wheels, interiors },
    name,
    setName,
    getPrice,
  } = useContext(CurrentVehicleHook);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const createCar = async (currentData) => {
    await createCarService(currentData);
  };

  const item_arrays = [exteriors, roofs, wheels, interiors];
  const item_types = ["exterior", "roof", "wheel", "interior"];

  return (
    <div className="car">
      <div className="options">
        <label className="convertible">
          <input
            checked={currentVehicle.isConvertible}
            onChange={() =>
              setVehicleField("isConvertible", !currentVehicle.isConvertible)
            }
            type="checkbox"
          />
          Convertible
        </label>
        <button onClick={() => setCurrentPageIndex(0)}>Exterior</button>
        <button onClick={() => setCurrentPageIndex(1)}>Roof</button>
        <button onClick={() => setCurrentPageIndex(2)}>Wheels</button>
        <button onClick={() => setCurrentPageIndex(3)}>Interior</button>
        <input
          type="text"
          placeholder="Name your car"
          className="car-name"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
        <button
          onClick={() =>
            createCar({ name, ...currentVehicle, price: getPrice() })
          }
        >
          Create
        </button>
      </div>
      <div className="car-detail-form">
        <ItemsBrochure
          items={item_arrays[currentPageIndex]}
          type={item_types[currentPageIndex]}
          onDone={() =>
            currentPageIndex < 3
              ? setCurrentPageIndex(currentPageIndex + 1)
              : setCurrentPageIndex(0)
          }
        />
      </div>
      <div className="price">💰 ${getPrice()}</div>
    </div>
  );
};

export default CreateCar;
