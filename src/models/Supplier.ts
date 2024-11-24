import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Supplier extends Model {
  public name!: string;
  public phone!: string;
  public email!: string;
  public taxId!: string;
}

export interface SupplierI {
  name: string;
  phone: string;
  email: string;
  taxId: string;
}

Supplier.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    taxId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    tableName: "suppliers",
    sequelize: database,
    timestamps: true
  }
);
