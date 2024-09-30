import { Request, Response, NextFunction } from 'express';
import { TipoProducto, TipoProductoI } from '../models/TipoProducto';

export class TipoProductoController {

  public async test(req: Request, res: Response) {
    try {
      res.send('hola, metodo test para TipoProducto')
    } catch (error) {
      // maneja el error aquí
    }
  }

  public async getAllTipoProducto(req: Request, res: Response) {
    try {
      const tipoProducto: TipoProductoI[] = await TipoProducto.findAll()
      res.status(200).json({ tipoProducto })
    } catch (error) {
      // maneja el error aquí
    }
  }

  public async getOneTipoProducto(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id: idParam } = req.params

    try {
      const tipoProducto: TipoProductoI | null = await TipoProducto.findOne(
        {
          where: {
            id: idParam,
          }
        }
      )
      if (tipoProducto) {
        res.status(200).json(tipoProducto)
      } else {
        res.status(300).json({ msg: "El TipoProducto no existe" })
      }
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" })
    }
    next() // Llamar a la siguiente función de middleware
  }

  public async createTipoProducto(req: Request, res: Response) {
    const {
      nombre,
      descripcion
    } = req.body;

    try {
      let body: TipoProductoI = {
        nombre,
        descripcion
      }

      const tipoProducto: TipoProductoI = await TipoProducto.create({ ...body });
      res.status(200).json({ tipoProducto });

    } catch (error) {
      // maneja el error aquí
    }
  }

  public async updateTipoProducto(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    const {
      nombre,
      descripcion
    } = req.body;

    try {
      let body: TipoProductoI = {
        nombre,
        descripcion
      };

      const tipoProductoExist: TipoProductoI | null = await TipoProducto.findByPk(pk);
      if (!tipoProductoExist) {
        res.status(404).json({ msg: "El TipoProducto No existe" });
        return;
      }

      await TipoProducto.update(
        body,
        {
          where: { id: pk }
        }
      );

      const tipoProducto: TipoProductoI | null = await TipoProducto.findByPk(pk);
      if (tipoProducto) {
        res.status(200).json({ tipoProducto });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error interno" });
    }
  }

  public async deleteTipoProducto(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    try {
      const tipoProductoExist: TipoProductoI | null = await TipoProducto.findByPk(pk);
      if (!tipoProductoExist) {
        res.status(404).json({ msg: "El TipoProducto No existe" });
        return;
      }
      await TipoProducto.destroy({
        where: { id: pk }
      });
      res.status(200).json({ msg: "TipoProducto Eliminado" });
    } catch (error) {
      // maneja el error aquí
    } finally {
      return Promise.resolve(); // devuelve un Promise<void>
    }
  }
}