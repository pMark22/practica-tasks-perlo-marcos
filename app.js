import express from "express";
import sequelize from "./src/config/database.js";
import User from "./src/models/user.model.js";
import Task from "./src/models/task.model.js";
import userRoutes from "./src/routes/user.routes.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("API Funcionando Correctamente")
});

app.use("/api/users", userRoutes);

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