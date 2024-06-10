import { PatientController } from '@/application/controller/PatientController';
import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import DoctorController from '@/application/controller/DoctorController'

export default class Router {
  app: express.Express;

  constructor(
    readonly doctorController: DoctorController, readonly PatientController: PatientController
  ) {
    this.app = express();
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());

    this.setRoutes();
  }

  private setRoutes() {
    this.app.get("/", (req, res) => {
      res.send("Hello World");
    });

    this.app.get('/doctors', this.doctorController.ListDoctor);
    this.app.post('/patient', this.PatientController.createPatient);
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
