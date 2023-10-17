import { createContext, useEffect, useState } from "react";
import {
  getAllExteriors,
  getAllInteriors,
  getAllRoofs,
  getAllWheels,
} from "../services/carsAPI.jsx";

const CurrentVehicleHook = createContext();

const initialValues = { isConvertible: false };

const CurrentVehicleHookProvider = ({ children }) => {
  const [currentVehicle, setCurrentVehicle] = useState(initialValues);
  const [name, setName] = useState("");
  const [constants, setConstants] = useState({
    exteriors: [],
    interiors: [],
    roofs: [],
    wheels: [],
  });

  useEffect(() => {
    const fetchAllDetails = async () => {
      const exteriors = await getAllExteriors();
      const interiors = await getAllInteriors();
      const roofs = await getAllRoofs();
      const wheels = await getAllWheels();

      setConstants({
        exteriors,
        interiors,
        roofs,
        wheels,
      });
    };

    fetchAllDetails();
  }, []);

  const setVehicleField = (field, value) => {
    setCurrentVehicle((currentVeh) => ({
      ...currentVeh,
      [field]: value,
    }));
  };

  const findPriceById = (items, id) => {
    if (!items) return 0;
    if (!id) return 0;
    const item = items.find((item) => item.id == id);
    return item.price;
  };

  const getPrice = () => {
    console.log(currentVehicle);
    let price = 65000;
    Object.keys(currentVehicle).forEach((key) => {
      if (key === "isConvertible" && currentVehicle[key]) {
        price += 10000;
      }
      if (key === "exterior") {
        price += findPriceById(constants.exteriors, currentVehicle[key]);
      }
      if (key === "interior") {
        price += findPriceById(constants.interiors, currentVehicle[key]);
      }
      if (key === "roof") {
        price += findPriceById(constants.roofs, currentVehicle[key]);
      }
      if (key === "wheel") {
        price += findPriceById(constants.wheels, currentVehicle[key]);
      }
    });
    return price;
  };

  const vehicleDetailProvider = {
    constants,
    name,
    setName,
    currentVehicle,
    setCurrentVehicle,
    setVehicleField,
    getPrice,
  };

  return (
    <CurrentVehicleHook.Provider value={vehicleDetailProvider}>
      {children}
    </CurrentVehicleHook.Provider>
  );
};

export { CurrentVehicleHookProvider, CurrentVehicleHook };
