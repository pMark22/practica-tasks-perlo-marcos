import { Router } from "express";
import { obtenerUsuarios, obtenerUsuarioPorId } from "../controllers/user.controller.js";

const router = Router();

router.get("/", obtenerUsuarios);

router.get("/:id", obtenerUsuarioPorId);

export default router;