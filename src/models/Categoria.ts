import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Categoria extends Model {
  public nombre!: string;
  public descripcion!: string;
}

export interface CategoriaI {
  nombre: string;
  descripcion: string;
}

Categoria.init(
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
    tableName: "categorias",
    sequelize: database,
    timestamps: true
  }
);