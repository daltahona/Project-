import { Request, Response, Application, Router } from "express";

import { EmployeeController } from '../controllers/employee.controller';

export class EmployeeRoutes {
    public employeeController: EmployeeController = new EmployeeController();

    public routes(app: Application): void {
        app.route("/employees/test").get(this.employeeController.test)
        app.route("/employees").get(this.employeeController.getAllEmployees)
        app.route("/employee/:id").get(this.employeeController.getOneEmployee)
        app.route("/employee").post(this.employeeController.createEmployee)
        app.route("/employee/:id").put(this.employeeController.updateEmployee)
        app.route("/employee/:id").delete(this.employeeController.deleteEmployee)
    }
}
