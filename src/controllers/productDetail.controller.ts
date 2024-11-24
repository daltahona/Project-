import { Request, Response, NextFunction } from 'express';
import { ProductDetail, ProductDetailI } from '../models/ProductDetail';

export class ProductDetailController {

  public async test(req: Request, res: Response) {
    try {
      res.send('Hello, test method for ProductDetail');
    } catch (error) {
      // handle the error here
    }
  }

  public async getAllProductDetail(req: Request, res: Response) {
    try {
      const productDetail: ProductDetailI[] = await ProductDetail.findAll();
      res.status(200).json({ productDetail });
    } catch (error) {
      // handle the error here
    }
  }

  public async getOneProductDetail(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id: idParam } = req.params;

    try {
      const productDetail: ProductDetailI | null = await ProductDetail.findOne(
        {
          where: {
            id: idParam,
          }
        }
      );
      if (productDetail) {
        res.status(200).json(productDetail);
      } else {
        res.status(300).json({ msg: "The ProductDetail does not exist" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal error" });
    }
    next(); // Call the next middleware function
  }

  public async createProductDetail(req: Request, res: Response) {
    const {
      description,
      value,
      isbn
    } = req.body;

    try {
      let body: ProductDetailI = {
        description,
        value,
        isbn
      };

      const productDetail: ProductDetailI = await ProductDetail.create({ ...body });
      res.status(200).json({ productDetail });

    } catch (error) {
      // handle the error here
    }
  }

  public async updateProductDetail(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    const {
      description,
      value,
      isbn
    } = req.body;

    try {
      let body: ProductDetailI = {
        description,
        value,
        isbn
      };

      const productDetailExist: ProductDetailI | null = await ProductDetail.findByPk(pk);
      if (!productDetailExist) {
        res.status(404).json({ msg: "The ProductDetail does not exist" });
        return;
      }

      await ProductDetail.update(
        body,
        {
          where: { id: pk }
        }
      );

      const productDetail: ProductDetailI | null = await ProductDetail.findByPk(pk);
      if (productDetail) {
        res.status(200).json({ productDetail });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal error" });
    }
  }

  public async deleteProductDetail(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    try {
      const productDetailExist: ProductDetailI | null = await ProductDetail.findByPk(pk);
      if (!productDetailExist) {
        res.status(404).json({ msg: "The ProductDetail does not exist" });
        return;
      }
      await ProductDetail.destroy({
        where: { id: pk }
      });
      res.status(200).json({ msg: "ProductDetail Deleted" });
    } catch (error) {
      // handle the error here
    } finally {
      return Promise.resolve(); // returns a Promise<void>
    }
  }
}
