import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class TipoProducto extends Model {
  public nombre!: string;
  public descripcion!: string;
}

export interface TipoProductoI {
  nombre: string;
  descripcion: string;
}

TipoProducto.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "tipo_productos",
    sequelize: database,
    timestamps: true
  }
);