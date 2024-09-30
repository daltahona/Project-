import { Request, Response, Application, Router } from "express";

import { EmpleadoController } from '../controllers/empleado.controller';

export class EmpleadoRoutes {
    public empleadoController: EmpleadoController = new EmpleadoController();

    public routes(app: Application): void {
        app.route("/empleados/test").get(this.empleadoController.test)
        app.route("/empleados").get(this.empleadoController.getAllEmpleado)
        app.route("/empleado/:id").get(this.empleadoController.getOneEmpleado)
        app.route("/empleado").post(this.empleadoController.createEmpleado)
        app.route("/empleado/:id").put(this.empleadoController.updateEmpleado)
        app.route("/empleado/:id").delete(this.empleadoController.deleteEmpleado)
    }
}