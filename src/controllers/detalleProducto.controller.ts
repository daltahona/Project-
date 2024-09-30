import { Request, Response, NextFunction } from 'express';
import { DetalleProducto, DetalleProductoI } from '../models/DetalleProducto';

export class DetalleProductoController {

  public async test(req: Request, res: Response) {
    try {
      res.send('hola, metodo test para DetalleProducto')
    } catch (error) {
      // maneja el error aquí
    }
  }

  public async getAllDetalleProducto(req: Request, res: Response) {
    try {
      const detalleProducto: DetalleProductoI[] = await DetalleProducto.findAll()
      res.status(200).json({ detalleProducto })
    } catch (error) {
      // maneja el error aquí
    }
  }

  public async getOneDetalleProducto(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id: idParam } = req.params

    try {
      const detalleProducto: DetalleProductoI | null = await DetalleProducto.findOne(
        {
          where: {
            id: idParam,
          }
        }
      )
      if (detalleProducto) {
        res.status(200).json(detalleProducto)
      } else {
        res.status(300).json({ msg: "El DetalleProducto no existe" })
      }
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" })
    }
    next() // Llamar a la siguiente función de middleware
  }

  public async createDetalleProducto(req: Request, res: Response) {
    const {
      descripcion,
      valor,
      isbn
    } = req.body;

    try {
      let body: DetalleProductoI = {
        descripcion,
        valor,
        isbn
      }

      const detalleProducto: DetalleProductoI = await DetalleProducto.create({ ...body });
      res.status(200).json({ detalleProducto });

    } catch (error) {
      // maneja el error aquí
    }
  }

  public async updateDetalleProducto(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    const {
      descripcion,
      valor,
      isbn
    } = req.body;

    try {
      let body: DetalleProductoI = {
        descripcion,
        valor,
        isbn
      };

      const detalleProductoExist: DetalleProductoI | null = await DetalleProducto.findByPk(pk);
      if (!detalleProductoExist) {
        res.status(404).json({ msg: "El DetalleProducto No existe" });
        return;
      }

      await DetalleProducto.update(
        body,
        {
          where: { id: pk }
        }
      );

      const detalleProducto: DetalleProductoI | null = await DetalleProducto.findByPk(pk);
      if (detalleProducto) {
        res.status(200).json({ detalleProducto });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error interno" });
    }
  }

  public async deleteDetalleProducto(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    try {
      const detalleProductoExist: DetalleProductoI | null = await DetalleProducto.findByPk(pk);
      if (!detalleProductoExist) {
        res.status(404).json({ msg: "El DetalleProducto No existe" });
        return;
      }
      await DetalleProducto.destroy({
        where: { id: pk }
      });
      res.status(200).json({ msg: "DetalleProducto Eliminado" });
    } catch (error) {
      // maneja el error aquí
    } finally {
      return Promise.resolve(); // devuelve un Promise<void>
    }
  }
}