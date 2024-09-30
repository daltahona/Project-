import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Proveedor extends Model {
  public nombre!: string;
  public telefono!: string;
  public correo!: string;
  public nit!: string;
}

export interface ProveedorI {
  nombre: string;
  telefono: string;
  correo: string;
  nit: string;
}

Proveedor.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nit: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    tableName: "proveedores",
    sequelize: database,
    timestamps: true
  }
);