import express from "express";
import sequelize from "./src/config/database.js";
import User from "./src/models/user.model.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) =>{
    res.send("API Funcionando Correctamente")
});

const startServer = async () => {
    try{
        await sequelize.authenticate();
        console.log("Conexion correcta");

        await sequelize.sync();
        console.log("Modelos sincronizados de forma correcta")

        app.listen(PORT, () => {
        console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Ocurrio un error:",error);
    }
};

startServer();