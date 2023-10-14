import expreess from "express";
import CustomCarController from "../controllers/customcars.js";

const router = expreess.Router();

router.get("/", CustomCarController.getCustomCars);
router.get("/:id", CustomCarController.getCustomCarById);

router.post("/", CustomCarController.createCustomCars);

router.patch("/:id", CustomCarController.updateCustomCars);

router.delete("/:id", CustomCarController.deleteCustomCars);

export default router;
