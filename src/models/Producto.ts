import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Empleado } from "./Empleado";
import { Proveedor } from "./Proveedor";
import { Categoria } from "./Categoria";
import { TipoProducto } from "./TipoProducto";
import { DetalleProducto } from "./DetalleProducto";

export class Producto extends Model {
  public nombre!: string;
  public cantidad!: number;
  public id_empleado!: number;
  public id_proveedor!: number;
  public id_categoria!: number;
  public id_tipoProducto!: number;
  public id_detalleProducto!: number;
}

export interface ProductoI {
  nombre: string;
  cantidad: number;
  id_empleado: number;
  id_proveedor: number;
  id_categoria: number;
  id_tipoProducto: number;
  id_detalleProducto: number;
}

Producto.init(
  {
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_empleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Empleado,
        key: 'id',
      },
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Proveedor,
        key: 'id',
      },
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Categoria,
        key: 'id',
      },
    },
    id_tipoProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TipoProducto,
        key: 'id',
      },
    },
    id_detalleProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: DetalleProducto,
        key: 'id',
      },
    },
  },
  {
    tableName: "productos",
    sequelize: database,
    timestamps: true,
  }
);

Producto.belongsTo(Empleado, { foreignKey: "id_empleado", as: "empleado" });
Producto.belongsTo(Proveedor, { foreignKey: "id_proveedor", as: "proveedor" });
Producto.belongsTo(Categoria, { foreignKey: "id_categoria", as: "categoria" });
Producto.belongsTo(TipoProducto, { foreignKey: "id_tipoProducto", as: "tipoProducto" });
Producto.belongsTo(DetalleProducto, { foreignKey: "id_detalleProducto", as: "detalleProducto" });