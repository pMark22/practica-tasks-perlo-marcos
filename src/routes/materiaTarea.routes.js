import express from "express";
import { asignarTarea } from "../controllers/materiaTarea.controller.js";

const router = express.Router();

router.post("/", asignarTarea);

export default router;