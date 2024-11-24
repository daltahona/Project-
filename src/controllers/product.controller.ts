import { Request, Response } from 'express';
import { Product, ProductI } from '../models/Product';
import { Employee, EmployeeI } from '../models/Employee';
import { Supplier, SupplierI } from '../models/Supplier';
import { Category, CategoryI } from '../models/Category';
import { ProductType, ProductTypeI } from '../models/ProductType';
import { ProductDetail, ProductDetailI } from '../models/ProductDetail';

export class ProductController {
    public async test(req: Request, res: Response): Promise<void> {
        try {
            res.send('Hello, test method for Product');
        } catch (error) {
            res.status(500).send({ error: 'Error in the test method of Product' });
        }
    }

    public async getOneProduct(req: Request, res: Response): Promise<void> {
        const { id: idParam } = req.params;

        try {
            const product: ProductI | null = await Product.findOne({
                where: {
                    id: idParam,
                },
                include: [
                    { model: Employee, as: 'employee' },
                    { model: Supplier, as: 'supplier' },
                    { model: Category, as: 'category' },
                    { model: ProductType, as: 'productType' },
                    { model: ProductDetail, as: 'productDetail' },
                ],
            });

            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ msg: "The product does not exist" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Internal server error" });
        }
    }

    public async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products: ProductI[] = await Product.findAll({
                include: [
                    { model: Employee, as: 'employee' },
                    { model: Supplier, as: 'supplier' },
                    { model: Category, as: 'category' },
                    { model: ProductType, as: 'productType' },
                    { model: ProductDetail, as: 'productDetail' },
                ],
            });
            res.status(200).json({ products});
        } catch (error) {
            res.status(500).send({ error: 'Error obtaining the products' });
        }
    }

    public async createProduct(req: Request, res: Response): Promise<void> {
        const { name, quantity, employee_id, supplier_id, category_id, productType_id, productDetail_id } = req.body;
        try {
            const product: ProductI = await Product.create({
                name,
                quantity,
                employee_id,
                supplier_id,
                category_id,
                productType_id,
                productDetail_id,
            });
            res.status(201).json({ product });
        } catch (error) {
            res.status(500).send({ error: 'Error creating the product' });
        }
    }

    public async updateProduct(req: Request, res: Response): Promise<void> {
        const { id: pk } = req.params;
        const { name, quantity, employee_id, supplier_id, category_id, productType_id, productDetail_id } = req.body;

        try {
            const productExist: ProductI | null = await Product.findByPk(pk);
            if (!productExist) {
                res.status(500).json({ msg: "The product does not exist" });
            }

            await Product.update(
                { name, quantity, employee_id, supplier_id, category_id, productType_id, productDetail_id },
                { where: { id: pk } }
            );

            const updatedProduct: ProductI | null = await Product.findByPk(pk);
            if (updatedProduct) {
                res.status(200).json({ product: updatedProduct });
            } else {
                res.status(500).json({ msg: "Error updating the product" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Internal error" });
        }
    }

    public async deleteProduct(req: Request, res: Response): Promise<void> {
        const { id: pk } = req.params;
        try {
            const productExist: ProductI | null = await Product.findByPk(pk);
            if (!productExist) {
                res.status(500).json({ msg: "The product does not exist" });
            }

            await Product.destroy({ where: { id: pk } });
            res.status(200).json({ msg: "Product deleted" });
        } catch (error) {
            res.status(500).json({ msg: "Internal error" });
        }
    }

    public async hideProduct(req: Request, res: Response): Promise<void> {
        const { id: pk } = req.params;
        try {
            const productExist: ProductI | null = await Product.findOne({
                where: { id: pk, state: true }
            });

            if (!productExist) {
                res.status(404).json({ msg: "The product does not exist or is already inactive" });
            }

            await Product.update({ state: false }, { where: { id: pk } });
            res.status(200).json({ msg: "Product deactivated" });
        } catch (error) {
            console.error('Error deactivating the product:', error);
            res.status(500).send({ error: 'Internal server error' });
        }
    }
}
