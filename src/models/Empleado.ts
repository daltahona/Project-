import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Empleado extends Model {
  public nombre!: string;
  public apellido!: string;
  public telefono!: string;
  public direccion!: string;
  public cargo!: string;
  public correo!: string;
}

export interface EmpleadoI {
  nombre: string;
  apellido: string;
  telefono: string;
  direccion: string;
  cargo: string;
  correo: string;
}

Empleado.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "empleados",
    sequelize: database,
    timestamps: true
  }
);