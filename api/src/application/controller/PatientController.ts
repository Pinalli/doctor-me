import {Request, Response} from 'express';

export default interface PatientController {
    creatPatient(request: Request, response: Response): Promise<void>;
    creatAppointment(request: Request, response: Response): Promise<void>;
}