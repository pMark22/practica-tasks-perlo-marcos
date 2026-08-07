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

const obtenerUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const usuario = await User.findByPk(id);

        if (!usuario) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            mensaje: "Usuario obtenido correctamente",
            datos: usuario
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener usuario",
            error: error.message
        });
    }
};

export { obtenerUsuarios, obtenerUsuarioPorId };