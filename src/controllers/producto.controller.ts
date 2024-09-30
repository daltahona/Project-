import { Request, Response } from 'express';
import { Producto, ProductoI } from '../models/Producto';
import { Empleado, EmpleadoI } from '../models/Empleado';
import { Proveedor, ProveedorI } from '../models/Proveedor';
import { Categoria, CategoriaI } from '../models/Categoria';
import { TipoProducto, TipoProductoI } from '../models/TipoProducto';
import { DetalleProducto, DetalleProductoI } from '../models/DetalleProducto';

export class ProductoController {
    public async test(req: Request, res: Response): Promise<void> {
        try {
            res.send('hola, método test para Producto');
        } catch (error) {
            res.status(500).send({ error: 'Error en el método test de Producto' });
        }
    }

    public async getOneProducto(req: Request, res: Response): Promise<void> {
        const { id: idParam } = req.params;

        try {
            const producto: ProductoI | null = await Producto.findOne({
                where: {
                    id: idParam,
                },
                include: [
                    { model: Empleado, as: 'empleado' },
                    { model: Proveedor, as: 'proveedor' },
                    { model: Categoria, as: 'categoria' },
                    { model: TipoProducto, as: 'tipoProducto' },
                    { model: DetalleProducto, as: 'detalleProducto' },
                ],
            });

            if (producto) {
                res.status(200).json(producto);
            } else {
                res.status(404).json({ msg: "El producto no existe" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Error interno del servidor" });
        }
    }

    public async getAllProductos(req: Request, res: Response): Promise<void> {
        try {
            const productos: ProductoI[] = await Producto.findAll({
                include: [
                    { model: Empleado, as: 'empleado' },
                    { model: Proveedor, as: 'proveedor' },
                    { model: Categoria, as: 'categoria' },
                    { model: TipoProducto, as: 'tipoProducto' },
                    { model: DetalleProducto, as: 'detalleProducto' },
                ],
            });
            res.status(200).json({ productos });
        } catch (error) {
            res.status(500).send({ error: 'Error al obtener los productos' });
        }
    }

    public async createProducto(req: Request, res: Response): Promise<void> {
        const { nombre, cantidad, id_empleado, id_proveedor, id_categoria, id_tipoProducto, id_detalleProducto } = req.body;
        try {
            const producto: ProductoI = await Producto.create({
                nombre,
                cantidad,
                id_empleado,
                id_proveedor,
                id_categoria,
                id_tipoProducto,
                id_detalleProducto,
            });
            res.status(201).json({ producto });
        } catch (error) {
            res.status(500).send({ error: 'Error al crear el producto' });
        }
    }

    public async updateProducto(req: Request, res: Response): Promise<void> {
        const { id: pk } = req.params;
        const { nombre, cantidad, id_empleado, id_proveedor, id_categoria, id_tipoProducto, id_detalleProducto } = req.body;

        try {
            const productoExist: ProductoI | null = await Producto.findByPk(pk);
            if (!productoExist) {
                res.status(500).json({ msg: "El producto no existe" });
            }

            await Producto.update(
                { nombre, cantidad, id_empleado, id_proveedor, id_categoria, id_tipoProducto, id_detalleProducto },
                { where: { id: pk } }
            );

            const updatedProducto: ProductoI | null = await Producto.findByPk(pk);
            if (updatedProducto) {
                res.status(200).json({ producto: updatedProducto });
            } else {
                res.status(500).json({ msg: "Error al actualizar el producto" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Error Internal" });
        }
    }

    public async deleteProducto(req: Request, res: Response): Promise<void> {
        const { id: pk } = req.params;
        try {
            const productoExist: ProductoI | null = await Producto.findByPk(pk);
            if (!productoExist) {
                res.status(500).json({ msg: "El producto no existe" });
            }

            await Producto.destroy({ where: { id: pk } });
            res.status(200).json({ msg: "Producto eliminado" });
        } catch (error) {
            res.status(500).json({ msg: "Error Internal" });
        }
    }

    public async hideProducto(req: Request, res: Response): Promise<void> {
        const { id: pk } = req.params;
        try {
            const productoExist: ProductoI | null = await Producto.findOne({
                where: { id: pk, estado: true }
            });

            if (!productoExist) {
                res.status(404).json({ msg: "El producto no existe o ya está inactivo" });
            }

            await Producto.update({ estado: false }, { where: { id: pk } });
            res.status(200).json({ msg: "Producto desactivado" });
        } catch (error) {
            console.error('Error al desactivar el producto:', error);
            res.status(500).send({ error: 'Error interno del servidor' });
        }
    }
}