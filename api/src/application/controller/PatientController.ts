import {Request, Response} from 'express';

export default interface PatientController {
    createPatient(req: Request, res: Response): Promise<void>;
    creatAppointment(req: Request, res: Response): Promise<void>;
}