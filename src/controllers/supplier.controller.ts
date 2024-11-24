import { Request, Response, NextFunction } from 'express';
import { Supplier, SupplierI } from '../models/Supplier';

export class SupplierController {

  public async test(req: Request, res: Response) {
    try {
      res.send('Hello, test method for Supplier');
    } catch (error) {
      // handle the error here
    }
  }

  public async getAllSupplier(req: Request, res: Response) {
    try {
      const supplier: SupplierI[] = await Supplier.findAll();
      res.status(200).json({ supplier });
    } catch (error) {
      // handle the error here
    }
  }

  public async getOneSupplier(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id: idParam } = req.params;

    try {
      const supplier: SupplierI | null = await Supplier.findOne(
        {
          where: {
            id: idParam,
          }
        }
      );
      if (supplier) {
        res.status(200).json(supplier);
      } else {
        res.status(300).json({ msg: "The Supplier does not exist" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal error" });
    }
    next(); // Call the next middleware function
  }

  public async createSupplier(req: Request, res: Response) {
    const {
      name,
      phone,
      email,
      taxId
    } = req.body;

    try {
      let body: SupplierI = {
        name,
        phone,
        email,
        taxId
      };

      const supplier: SupplierI = await Supplier.create({ ...body });
      res.status(200).json({ supplier });

    } catch (error) {
      // handle the error here
    }
  }

  public async updateSupplier(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    const {
      name,
      phone,
      email,
      taxId
    } = req.body;

    try {
      let body: SupplierI = {
        name,
        phone,
        email,
        taxId
      };

      const supplierExist: SupplierI | null = await Supplier.findByPk(pk);
      if (!supplierExist) {
        res.status(404).json({ msg: "The Supplier does not exist" });
        return;
      }

      await Supplier.update(
        body,
        {
          where: { id: pk }
        }
      );

      const supplier: SupplierI | null = await Supplier.findByPk(pk);
      if (supplier) {
        res.status(200).json({ supplier });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal error" });
    }
  }

  public async deleteSupplier(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    try {
      const supplierExist: SupplierI | null = await Supplier.findByPk(pk);
      if (!supplierExist) {
        res.status(404).json({ msg: "The Supplier does not exist" });
        return;
      }
      await Supplier.destroy({
        where: { id: pk }
      });
      res.status(200).json({ msg: "Supplier Deleted" });
    } catch (error) {
      // handle the error here
    } finally {
      return Promise.resolve(); // returns a Promise<void>
    }
  }
}
