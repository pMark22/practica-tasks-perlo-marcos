import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) =>{
    res.send("API Funcionando Correctamente")
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});

 