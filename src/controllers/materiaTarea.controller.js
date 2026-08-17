import Materia from "../models/materia.model.js";
import Task from "../models/task.model.js";
import MateriaTarea from "../models/materiaTarea.model.js";

const asignarTarea = async (req, res) => {
    try {
        const { materiaId, tareaId } = req.body;

        if (!materiaId || !tareaId) {
            return res.status(400).json({
                mensaje: "materiaId y tareaId son obligatorios"
            });
        }

        const materia = await Materia.findByPk(materiaId);
        if (!materia) {
            return res.status(404).json({
                mensaje: "Materia no encontrada"
            });
        }

        const tarea = await Task.findByPk(tareaId);
        if (!tarea) {
            return res.status(404).json({
                mensaje: "Tarea no encontrada"
            });
        }

        const relacionExistente = await MateriaTarea.findOne({
            where: {
                materiaId,
                tareaId
            }
        });

        if (relacionExistente) {
            return res.status(400).json({
                mensaje: "La tarea ya está asignada a esta materia"
            });
        }

        const relacion = await MateriaTarea.create({
            materiaId,
            tareaId
        });

        res.status(201).json({
            mensaje: "Tarea asignada a la materia correctamente",
            datos: relacion
        });

    } catch (error) {
        console.error("Error al asignar tarea:", error);

        res.status(500).json({
            mensaje: "Error al asignar tarea",
            error: error.message
        });
    }
};

export { asignarTarea };