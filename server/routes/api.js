import { Router } from "express";
import customCarRouter from "./customcars.js";
import optionsRouter from "./options.js";

const router = Router();

router.use("/customcars", customCarRouter);
router.use("/options", optionsRouter);

export default router;
