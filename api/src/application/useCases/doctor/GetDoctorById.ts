import DatabaseService from "@/infra/DatabaseService";

export default class GetDoctorByIdUseCase{
    constructor(readonly database: DatabaseService){

    }
    async execute(id: number){
        const doctor = await this.database.getDoctorById(id);

        if(!doctor){
            throw new Error("Doctor not found");
        }
        return doctor;
    }
}