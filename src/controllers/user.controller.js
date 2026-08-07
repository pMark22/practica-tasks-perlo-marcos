import User from "../models/user.model.js";

const obtenerUsuarios = async(req,res) => {
    try {
        const usuarios = await User.findAll();

        res.status(200).json({
            mensaje: "Usuarios obtenidos correctamente",
            datos: usuarios
        });

    } catch (error) {

    console.error("Error al obtener usuarios:", error);

    res.status(500).json({
        mensaje: "Error al obtener usuarios",
        error: error.message
    });
}
};

export default obtenerUsuarios;