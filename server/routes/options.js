import { Router } from "express";
import * as controller from "../controllers/options.js";

const router = Router();

router.get("/exteriors", controller.getAllExteriers);
router.get("/exteriors/:id", controller.getExteriorById);

router.get("/roofs", controller.getAllRoofs);
router.get("/roofs", controller.getRoofById);

router.get("/wheels", controller.getAllWheels);
router.get("/wheels", controller.getWheelById);

router.get("/interiors", controller.getAllInteriors);
router.get("/interiors", controller.getInteriorById);

export default router;
