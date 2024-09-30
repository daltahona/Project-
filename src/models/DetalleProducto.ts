import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class DetalleProducto extends Model {
  public descripcion!: string;
  public valor!: string;
  public isbn!: string;
}

export interface DetalleProductoI {
  descripcion: string;
  valor: string;
  isbn: string;
}

DetalleProducto.init(
  {
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    valor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "detalle_productos",
    sequelize: database,
    timestamps: true
  }
);