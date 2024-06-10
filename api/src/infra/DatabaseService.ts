import DatabaseService from "@infra/DatabaseService";
import { PrismaClient } from "@prisma/client";

export default class DatabaseService {
  constructor(readonly connection: PrismaClient) {}

  listDoctor() {
    return this.connection.doctor.findMany();
  }

  getDoctorById(id: number, includeAgenda: boolean = false) {
    return this.connection.doctor.findUnique({
      where: { id },
      include: {
        agenda: includeAgenda,
      },
    });
  }

  getPatientByPhone(phone: string, includeAppointment: boolean = false) {
    return this.connection.patient.findUnique({
      where: { phone },
      include: {
        appointments: includeAppointment,
      },
    });
  }

  creatUser(phone: string, password: string) {
    return this.connection.user.create({
      data: {
        phone,
        password,
      },
    });
  }

  creatPatient(phone: string, password: string) {
    return this.connection.patient.create({
      data: {
        phone,
        password,
      },
    });
  }


}

export const database = new DatabaseService(new PrismaClient());
