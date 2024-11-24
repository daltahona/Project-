import { Request, Response, Application, Router } from "express";

import { CategoryController } from '../controllers/category.controller';

export class CategoryRoutes {
  public categoryController: CategoryController = new CategoryController();

  public routes(app: Application): void {
    app.route("/categories/test").get(this.categoryController.test);
    app.route("/categories").get(this.categoryController.getAllCategory);
    app.route("/category/:id").get(this.categoryController.getOneCategory);
    app.route("/category").post(this.categoryController.createCategory);
    app.route("/category/:id").put(this.categoryController.updateCategory);
    app.route("/category/:id").delete(this.categoryController.deleteCategory);
  }
}
