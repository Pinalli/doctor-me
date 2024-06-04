import { Request, Response } from 'express';

export default interface DoctorController{
    ListDoctor(req: Request, res: Response): Promise<void>;
}