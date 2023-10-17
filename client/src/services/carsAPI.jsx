import { request } from "../utilities/api.js";

export const getAllExteriors = () => request("GET", "/options/exteriors");
export const getExteriorById = (id) =>
  request("GET", `/options/exteriors/${id}`);
export const getAllInteriors = () => request("GET", "/options/interiors");
export const getInteriorById = (id) =>
  request("GET", `/options/interiors/${id}`);
export const getAllRoofs = () => request("GET", "/options/roofs");
export const getRoofById = (id) => request("GET", `/options/roofs/${id}`);
export const getAllWheels = () => request("GET", "/options/wheels");
export const getWheelById = (id) => request("GET", `/options/wheels/${id}`);

export const getAllCars = () => request("GET", "/customcars");
export const getCarById = (id) => request("GET", `/customcars/${id}`);
export const createCar = (car) => request("POST", "/customcars", car);
export const updateCar = (id, car) => request("PUT", `/customcars/${id}`, car);
export const deleteCar = (id) => request("DELETE", `/customcars/${id}`);
