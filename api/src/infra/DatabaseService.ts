import DatabaseService from "@infra/DatabaseService";
import { PrismaClient } from "@prisma/client";

export default class DatabaseService {
  constructor(readonly connection: PrismaClient) {}

  listDoctor() {
    return this.connection.doctor.findMany();
  }

  getDoctorById(id: number, includeAgenda = false) {
    return this.connection.doctor.findUnique({
      where: { id },
      include: {
        agenda: includeAgenda,
      },
    });
  }

  getPatientByPhone(phone: string, includeAppointment = boolean) {
    return this.connection.patient.findUnique({
      where: { phone },
      include: {
        appointments: includeAppointment,
      },
    });
  }
}

export const database = new DatabaseService(new PrismaClient());
