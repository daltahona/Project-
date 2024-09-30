import { Request, Response, NextFunction } from 'express';
import { Proveedor, ProveedorI } from '../models/Proveedor';

export class ProveedorController {

  public async test(req: Request, res: Response) {
    try {
      res.send('hola, metodo test para Proveedor')
    } catch (error) {
      // maneja el error aquí
    }
  }

  public async getAllProveedor(req: Request, res: Response) {
    try {
      const proveedor: ProveedorI[] = await Proveedor.findAll()
      res.status(200).json({ proveedor })
    } catch (error) {
      // maneja el error aquí
    }
  }

  public async getOneProveedor(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id: idParam } = req.params

    try {
      const proveedor: ProveedorI | null = await Proveedor.findOne(
        {
          where: {
            id: idParam,
          }
        }
      )
      if (proveedor) {
        res.status(200).json(proveedor)
      } else {
        res.status(300).json({ msg: "El Proveedor no existe" })
      }
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" })
    }
    next() // Llamar a la siguiente función de middleware
  }

  public async createProveedor(req: Request, res: Response) {
    const {
      nombre,
      telefono,
      correo,
      nit
    } = req.body;

    try {
      let body: ProveedorI = {
        nombre,
        telefono,
        correo,
        nit
      }

      const proveedor: ProveedorI = await Proveedor.create({ ...body });
      res.status(200).json({ proveedor });

    } catch (error) {
      // maneja el error aquí
    }
  }

  public async updateProveedor(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    const {
      nombre,
      telefono,
      correo,
      nit
    } = req.body;

    try {
      let body: ProveedorI = {
        nombre,
        telefono,
        correo,
        nit
      };

      const proveedorExist: ProveedorI | null = await Proveedor.findByPk(pk);
      if (!proveedorExist) {
        res.status(404).json({ msg: "El Proveedor No existe" });
        return;
      }

      await Proveedor.update(
        body,
        {
          where: { id: pk }
        }
      );

      const proveedor: ProveedorI | null = await Proveedor.findByPk(pk);
      if (proveedor) {
        res.status(200).json({ proveedor });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error interno" });
    }
  }

  public async deleteProveedor(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    try {
      const proveedorExist: ProveedorI | null = await Proveedor.findByPk(pk);
      if (!proveedorExist) {
        res.status(404).json({ msg: "El Proveedor No existe" });
        return;
      }
      await Proveedor.destroy({
        where: { id: pk }
      });
      res.status(200).json({ msg: "Proveedor Eliminado" });
    } catch (error) {
      // maneja el error aquí
    } finally {
      return Promise.resolve(); // devuelve un Promise<void>
    }
  }
}