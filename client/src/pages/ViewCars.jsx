import React, { useState, useEffect } from "react";
import Car from "../components/Car.jsx";
import { getAllCars } from "../services/carsAPI.jsx";
import "../App.css";

const ViewCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getCars = async () => {
      const cars = await getAllCars();
      setCars(cars);
    };

    getCars();
  }, []);

  return (
    <div>
      {!cars && <h1>No cars have been created yet ☹️</h1>}
      {cars && cars.map((car) => <Car key={car.id} car={car} />)}
    </div>
  );
};

export default ViewCars;
