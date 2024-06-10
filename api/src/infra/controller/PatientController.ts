import PatientController from "@/application/controller/PatientController";
import { Request, Response } from "express";
import {database} from "@/infra/DatabaseService";
import CreatePatientUseCase from "@/application/useCases/patient/CreatePatient";

export default class PatientControllerImpl implements PatientController {
  async createPatient(request: Request, response: Response) {
    const { name, phone, password } = request.body;
    const useCase = new CreatePatientUseCase(database);
    const patient = await useCase.execute(name, phone, password);

    response.status(201).json(patient);
  }
  creatAppointment(request: Request, response: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
