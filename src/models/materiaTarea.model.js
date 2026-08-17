import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const MateriaTarea = sequelize.define("MateriaTarea", {
    materiaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tareaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
});

export default MateriaTarea;