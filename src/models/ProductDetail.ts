import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class ProductDetail extends Model {
  public description!: string;
  public value!: string;
  public isbn!: string;
}

export interface ProductDetailI {
  description: string;
  value: string;
  isbn: string;
}

ProductDetail.init(
  {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "product_details",
    sequelize: database,
    timestamps: true
  }
);
