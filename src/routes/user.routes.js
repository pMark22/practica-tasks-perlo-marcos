import { Router } from "express";
import obtenerUsuarios from "../controllers/user.controller.js";

const router = Router();

router.get("/", obtenerUsuarios);

export default router;