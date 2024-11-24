import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class ProductType extends Model {
  public name!: string;
  public description!: string;
}

export interface ProductTypeI {
  name: string;
  description: string;
}

ProductType.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "product_types",
    sequelize: database,
    timestamps: true
  }
);
