export default class CreateAppointmentUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute(
    patientPhone: string,
    doctorPhone: string,
    date: string,
    time: string
  ) {
    const appointment = {
      patientPhone,
      doctorPhone,
      date,
      time,
    };
    const newAppointment = await this.database.createAppointment(appointment);

    if (!newAppointment) {
      throw new Error("Appointment not created");
    }
    return newAppointment;
  }
}