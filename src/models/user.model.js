import {DataTypes} from "sequelize";
import sequelize from "../config/database.js";
// import Task from "./task.model.js";

const User = sequelize.define("User", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(100),
        unique: true,
        allowNull:false,
    },
    password:{
        type: DataTypes.STRING(100),
        allowNull:false,
    },
},{
    timestamps:false,
});

export default User;

//relaciones
//relacion de uno a muchos 
// User.hasMany(Task,{
//     foreignKey:"userId",
//     as: "tareas"
// })