import { Request, Response, NextFunction } from 'express';
import { Employee, EmployeeI } from '../models/Employee';

export class EmployeeController {

  public async test(req: Request, res: Response) {
    try {
      res.send('Hello, test method for Employee');
    } catch (error) {
      // Handle error here
    }
  }

  public async getAllEmployees(req: Request, res: Response) {
    try {
      const employee: EmployeeI[] = await Employee.findAll();
      res.status(200).json({ employee });
    } catch (error) {
      // Handle error here
    }
  }

  public async getOneEmployee(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id: idParam } = req.params;

    try {
      const employee: EmployeeI | null = await Employee.findOne(
        {
          where: { 
            id: idParam,
          }
        }
      );
      if (employee) {
        res.status(200).json(employee);
      } else {
        res.status(300).json({ msg: "Employee does not exist" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal error" });
    }
    next(); // Call the next middleware function
  }

  public async createEmployee(req: Request, res: Response) {
    const {
      firstName,
      lastName,
      phone,
      address,
      position,
      email
    } = req.body;

    try {
      let body: EmployeeI = {
        firstName,
        lastName,
        phone,
        address,
        position,
        email
      };

      const employee: EmployeeI = await Employee.create({ ...body });
      res.status(200).json({ employee });

    } catch (error) {
      // Handle error here
    }
  }

  public async updateEmployee(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    const {
      firstName,
      lastName,
      phone,
      address,
      position,
      email
    } = req.body;

    try {
      let body: EmployeeI = {
        firstName,
        lastName,
        phone,
        address,
        position,
        email
      };

      const employeeExist: EmployeeI | null = await Employee.findByPk(pk);
      if (!employeeExist) {
        res.status(404).json({ msg: "Employee does not exist" });
        return;
      }

      await Employee.update(
        body,
        {
          where: { id: pk }
        }
      );

      const employee: EmployeeI | null = await Employee.findByPk(pk);
      if (employee) {
        res.status(200).json({ employee });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal error" });
    }
  }

  public async deleteEmployee(req: Request, res: Response): Promise<void> {
    const { id: pk } = req.params;

    try {
      const employeeExist: EmployeeI | null = await Employee.findByPk(pk);
      if (!employeeExist) {
        res.status(404).json({ msg: "Employee does not exist" });
        return;
      }
      await Employee.destroy({
        where: { id: pk }
      });
      res.status(200).json({ msg: "Employee deleted" });
    } catch (error) {
      // Handle error here
    } finally {
      return Promise.resolve(); // Return a Promise<void>
    }
  }

}
