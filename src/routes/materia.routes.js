import express from "express";
import {
    crearMateria,
    obtenerMaterias
} from "../controllers/materia.controller.js";

const router = express.Router();

router.post("/", crearMateria);
router.get("/", obtenerMaterias);

export default router;