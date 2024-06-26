import DatabaseService from "@/infra/DatabaseService";
import { hashPassword } from "@/infra/helpers/SecurityHelper";

export default class CreatePatientUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(name: string, phone: string, password: string) {

    const patient = await this.database.getPatientByPhone(phone);
    if (patient) {
      throw new Error("Patient already exists with this phone number!");
    }

    const hashedPassword = hashPassword(password);

    const user = await this.database.createUser(phone, hashedPassword);

    const newPatient = await this.database.createPatient(name, phone, user.id);
    if (!newPatient) {
      throw new Error("Patient not created");
    }
    return newPatient;
  }
}
