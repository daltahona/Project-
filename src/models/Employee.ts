import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Employee extends Model {
  public firstName!: string;
  public lastName!: string;
  public phone!: string;
  public address!: string;
  public position!: string;
  public email!: string;
}

export interface EmployeeI {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  position: string;
  email: string;
}

Employee.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "employees",
    sequelize: database,
    timestamps: true
  }
);
