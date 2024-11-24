import { Request, Response, NextFunction } from 'express';
import { Category, CategoryI } from '../models/Category';

export class CategoryController {

  public async test(req: Request, res: Response) {
    try {
      res.send('Hello, test method for Category');
    } catch (error) {
      // Handle error here
    }
  }

  public async getAllCategory(req: Request, res: Response) {
    try {
      const category: CategoryI[] = await Category.findAll();
      res.status(200).json({ category });
    } catch (error) {
      // Handle error here
    }
  }

  public async getOneCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id: idParam } = req.params;

    try {
      const category: CategoryI | null = await Category.findOne(
        {
          where: {
            id: idParam,
          }
        }
      );
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(300).json({ msg: "Category does not exist" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal error" });
    }
    next(); // Call the next middleware function
  }

  public async createCategory(req: Request, res: Response) {
    const {
      name,
      description
    } = req.body;

    try {
      let body: CategoryI = {
        name,
        description
      };

      const category: CategoryI = await Category.create({ ...body });
      res.status(200).json({ category });

    } catch (error) {
      // Handle error here
    }
  }

  public async updateCategory(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    const {
      name,
      description
    } = req.body;

    try {
      let body: CategoryI = {
        name,
        description
      };

      const categoryExist: CategoryI | null = await Category.findByPk(pk);
      if (!categoryExist) {
        res.status(404).json({ msg: "Category does not exist" });
        return;
      }

      await Category.update(
        body,
        {
          where: { id: pk }
        }
      );

      const category: CategoryI | null = await Category.findByPk(pk);
      if (category) {
        res.status(200).json({ category });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal error" });
    }
  }

  public async deleteCategory(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    try {
      const categoryExist: CategoryI | null = await Category.findByPk(pk);
      if (!categoryExist) {
        res.status(404).json({ msg: "Category does not exist" });
        return;
      }
      await Category.destroy({
        where: { id: pk }
      });
      res.status(200).json({ msg: "Category deleted" });
    } catch (error) {
      // Handle error here
    } finally {
      return Promise.resolve(); // Return a Promise<void>
    }
  }
}
