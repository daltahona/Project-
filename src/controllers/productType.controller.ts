import { Request, Response, NextFunction } from 'express';
import { ProductType, ProductTypeI } from '../models/ProductType';

export class ProductTypeController {

  public async test(req: Request, res: Response) {
    try {
      res.send('Hello, test method for ProductType');
    } catch (error) {
      // handle the error here
    }
  }

  public async getAllProductType(req: Request, res: Response) {
    try {
      const productType: ProductTypeI[] = await ProductType.findAll();
      res.status(200).json({ productType });
    } catch (error) {
      // handle the error here
    }
  }

  public async getOneProductType(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id: idParam } = req.params;

    try {
      const productType: ProductTypeI | null = await ProductType.findOne(
        {
          where: {
            id: idParam,
          }
        }
      );
      if (productType) {
        res.status(200).json(productType);
      } else {
        res.status(300).json({ msg: "The ProductType does not exist" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal error" });
    }
    next(); // Call the next middleware function
  }

  public async createProductType(req: Request, res: Response) {
    const {
      name,
      description
    } = req.body;

    try {
      let body: ProductTypeI = {
        name,
        description
      };

      const productType: ProductTypeI = await ProductType.create({ ...body });
      res.status(200).json({ productType });

    } catch (error) {
      // handle the error here
    }
  }

  public async updateProductType(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    const {
      name,
      description
    } = req.body;

    try {
      let body: ProductTypeI = {
        name,
        description
      };

      const productTypeExist: ProductTypeI | null = await ProductType.findByPk(pk);
      if (!productTypeExist) {
        res.status(404).json({ msg: "The ProductType does not exist" });
        return;
      }

      await ProductType.update(
        body,
        {
          where: { id: pk }
        }
      );

      const productType: ProductTypeI | null = await ProductType.findByPk(pk);
      if (productType) {
        res.status(200).json({ productType });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal error" });
    }
  }

  public async deleteProductType(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    try {
      const productTypeExist: ProductTypeI | null = await ProductType.findByPk(pk);
      if (!productTypeExist) {
        res.status(404).json({ msg: "The ProductType does not exist" });
        return;
      }
      await ProductType.destroy({
        where: { id: pk }
      });
      res.status(200).json({ msg: "ProductType Deleted" });
    } catch (error) {
      // handle the error here
    } finally {
      return Promise.resolve(); // returns a Promise<void>
    }
  }
}
