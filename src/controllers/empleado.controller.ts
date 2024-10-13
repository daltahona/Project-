import { Request, Response, NextFunction } from 'express';
import { Empleado, EmpleadoI } from '../models/Empleado';

export class EmpleadoController {

  public async test(req: Request, res: Response) {
    try {
      res.send('hola, metodo test para Empleado')
    } catch (error) {

    }
  }

  public async getAllEmpleado(req: Request, res: Response) {
    try {
      const empleado: EmpleadoI[] = await Empleado.findAll()
      res.status(200).json({ empleado })
    } catch (error) {

    }
  }

  public async getOneEmpleado(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id: idParam } = req.params

    try {
      const empleado: EmpleadoI | null = await Empleado.findOne(
        {
          where: { 
            id: idParam,
          }
        }
      )
      if (empleado){
        res.status(200).json(empleado)
      } else {
        res.status(300).json({msg: "El Empleado no existe"})
      }
    } catch (error) {
      res.status(500).json({msg: "Error Internal"})
    }
    next() // Llamar a la siguiente función de middleware
  }

  public async createEmpleado(req: Request, res: Response) {
    const {
      nombre,
      apellido,
      telefono,
      direccion,
      cargo,
      correo
    } = req.body;

    try {
      let body: EmpleadoI = {
        nombre,
        apellido,
        telefono,
        direccion,
        cargo,
        correo
      } 

      const empleado: EmpleadoI = await Empleado.create({...body});
      res.status(200).json({empleado});

    } catch (error) {

    }

  }

  public async updateEmpleado(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    const {
      nombre,
      apellido,
      telefono,
      direccion,
      cargo,
      correo
    } = req.body;

    try {
      let body: EmpleadoI = {
        nombre,
        apellido,
        telefono,
        direccion,
        cargo,
        correo
      };

      const empleadoExist: EmpleadoI | null = await Empleado.findByPk(pk);
      if (!empleadoExist) {
        res.status(404).json({ msg: "El Empleado No existe" });
        return;
      }

      await Empleado.update(
        body,
        {
          where: { id: pk }
        }
      );

      const empleado: EmpleadoI | null = await Empleado.findByPk(pk);
      if (empleado) {
        res.status(200).json({ empleado });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error interno" });
    }
  }

  public async deleteEmpleado(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    try {
      const empleadoExist: EmpleadoI | null = await Empleado.findByPk(pk);
      if (!empleadoExist) {
        res.status(404).json({ msg: "El Empleado No existe" });
        return;
      }
      await Empleado.destroy({
        where: { id: pk }
      });
      res.status(200).json({ msg: "Empleado Eliminado" });
    } catch (error) {
      // maneja el error aquí
    } finally {
      return Promise.resolve(); // devuelve un Promise<void>
    }
  }

}