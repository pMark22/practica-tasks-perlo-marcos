import { Router } from "express";
import {
    obtenerTareas,
    obtenerTareaPorId,
    crearTarea,
    actualizarTarea,
    eliminarTarea
} from "../controllers/task.controller.js";

const router = Router();

router.get("/", obtenerTareas);
router.get("/:id", obtenerTareaPorId);
router.post("/", crearTarea);
router.put("/:id", actualizarTarea);
router.delete("/:id", eliminarTarea);

export default router;