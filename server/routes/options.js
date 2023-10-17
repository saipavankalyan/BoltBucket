import { Router } from "express";
import * as controller from "../controllers/options.js";

const router = Router();

router.get("/exteriors", controller.getAllExteriors);
router.get("/exteriors/:id", controller.getExteriorById);

router.get("/roofs", controller.getAllRoofs);
router.get("/roofs/:id", controller.getRoofById);

router.get("/wheels", controller.getAllWheels);
router.get("/wheels/:id", controller.getWheelById);

router.get("/interiors", controller.getAllInteriors);
router.get("/interiors/:id", controller.getInteriorById);

export default router;
