import React, { useContext } from "react";
import "../css/Car.css";
import { CurrentVehicleHook } from "../hooks/CurrentVehicleHook";

const Car = ({ car }) => {
  const {
    constants: { exteriors, roofs, wheels, interiors },
  } = useContext(CurrentVehicleHook);

  const getName = (items, id) => {
    if (!id || !items) return "";
    return items.find((item) => item.id == id)?.name || "";
  };

  const {
    exterior: exteriorId,
    interior: interiorId,
    roof: roofId,
    wheel: wheelId,
    name,
    price,
    isConvertible,
  } = car;

  const [exteriorName, interiorName, roofName, wheelName] = [
    getName(exteriors, exteriorId),
    getName(interiors, interiorId),
    getName(roofs, roofId),
    getName(wheels, wheelId),
  ];

  const convertibleCarLogo =
    "https://boltbucket.up.railway.app/assets/convertible-d1e22bba.png";
  const nonConvertibleCarLogo =
    "https://boltbucket.up.railway.app/assets/coupe-6d0eccac.png";

  return (
    <div className="car-details">
      <img
        src={isConvertible ? convertibleCarLogo : nonConvertibleCarLogo}
        alt="car"
      ></img>
      <div className="car-name">{name}</div>
      <div className="car-price">${price}</div>
      <div className="car-exterior">🖌️ Exterior: {exteriorName}</div>
      <div className="car-roof">😎 Roof: {roofName}</div>
      <div className="car-wheel">🛴 Wheels: {wheelName}</div>
      <div className="car-interior">💺 Interior: {interiorName}</div>
      <p>💰 ${price}</p>
      <button>Details</button>
    </div>
  );
};

export default Car;
