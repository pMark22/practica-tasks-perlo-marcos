import express from "express";
import sequelize from "./src/config/database.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) =>{
    res.send("API Funcionando Correctamente")
});

const startServer = async () => {
    try{
        await sequelize.authenticate();
        console.log("conexion correcta");

        app.listen(PORT, () => {
        console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Ocurrio un error:",error);
    }
};

startServer();