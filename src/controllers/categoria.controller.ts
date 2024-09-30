import { Request, Response, NextFunction } from 'express';
import { Categoria, CategoriaI } from '../models/Categoria';

export class CategoriaController {

  public async test(req: Request, res: Response) {
    try {
      res.send('hola, metodo test para Categoria')
    } catch (error) {
      // maneja el error aquí
    }
  }

  public async getAllCategoria(req: Request, res: Response) {
    try {
      const categoria: CategoriaI[] = await Categoria.findAll()
      res.status(200).json({ categoria })
    } catch (error) {
      // maneja el error aquí
    }
  }

  public async getOneCategoria(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id: idParam } = req.params

    try {
      const categoria: CategoriaI | null = await Categoria.findOne(
        {
          where: {
            id: idParam,
          }
        }
      )
      if (categoria) {
        res.status(200).json(categoria)
      } else {
        res.status(300).json({ msg: "La Categoria no existe" })
      }
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" })
    }
    next() // Llamar a la siguiente función de middleware
  }

  public async createCategoria(req: Request, res: Response) {
    const {
      nombre,
      descripcion
    } = req.body;

    try {
      let body: CategoriaI = {
        nombre,
        descripcion
      }

      const categoria: CategoriaI = await Categoria.create({ ...body });
      res.status(200).json({ categoria });

    } catch (error) {
      // maneja el error aquí
    }
  }

  public async updateCategoria(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    const {
      nombre,
      descripcion
    } = req.body;

    try {
      let body: CategoriaI = {
        nombre,
        descripcion
      };

      const categoriaExist: CategoriaI | null = await Categoria.findByPk(pk);
      if (!categoriaExist) {
        res.status(404).json({ msg: "La Categoria No existe" });
        return;
      }

      await Categoria.update(
        body,
        {
          where: { id: pk }
        }
      );

      const categoria: CategoriaI | null = await Categoria.findByPk(pk);
      if (categoria) {
        res.status(200).json({ categoria });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error interno" });
    }
  }

  public async deleteCategoria(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    try {
      const categoriaExist: CategoriaI | null = await Categoria.findByPk(pk);
      if (!categoriaExist) {
        res.status(404).json({ msg: "La Categoria No existe" });
        return;
      }
      await Categoria.destroy({
        where: { id: pk }
      });
      res.status(200).json({ msg: "Categoria Eliminada" });
    } catch (error) {
      // maneja el error aquí
    } finally {
      return Promise.resolve(); // devuelve un Promise<void>
    }
  }
}