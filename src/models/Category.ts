import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Category extends Model {
  public name!: string;
  public description!: string;
}

export interface CategoryI {
  name: string;
  description: string;
}

Category.init(
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
    tableName: "categories",
    sequelize: database,
    timestamps: true
  }
);
