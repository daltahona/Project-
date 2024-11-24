import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Employee } from "./Employee";
import { Supplier } from "./Supplier";
import { Category } from "./Category";
import { ProductType } from "./ProductType";
import { ProductDetail } from "./ProductDetail";

export class Product extends Model {
  public name!: string;
  public quantity!: number;
  public employee_id!: number;
  public supplier_id!: number;
  public category_id!: number;
  public productType_id!: number;
  public productDetail_id!: number;
}

export interface ProductI {
  name: string;
  quantity: number;
  employee_id: number;
  supplier_id: number;
  category_id: number;
  productType_id: number;
  productDetail_id: number;
}

Product.init(
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Employee,
        key: 'id',
      },
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Supplier,
        key: 'id',
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: 'id',
      },
    },
    productType_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ProductType,
        key: 'id',
      },
    },
    productDetail_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ProductDetail,
        key: 'id',
      },
    },
  },
  {
    tableName: "products",
    sequelize: database,
    timestamps: true,
  }
);

Product.belongsTo(Employee, { foreignKey: "employee_id", as: "employee" });
Product.belongsTo(Supplier, { foreignKey: "supplier_d", as: "supplier" });
Product.belongsTo(Category, { foreignKey: "category_id", as: "category" });
Product.belongsTo(ProductType, { foreignKey: "productType_id", as: "productType" });
Product.belongsTo(ProductDetail, { foreignKey: "productDetail_id", as: "productDetail" });
