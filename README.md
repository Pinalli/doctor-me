
 ## Requisitos da API

API deve garantir:

• [ ] Garantir que a API tenha um código limpo e de fácil manutenção <br>
• [x] Garantir que a API tenha uma forma ágil de acesso ao banco de dados [prisma]<br>
• [ ] Garantir que a API tenha um tratamento de erros <br>
• [ ] Garantir que a API não pare quando algum erro for retornado <br>
• [ ] Garantir que a API valide qualquer payload recebido <br>
• [ ] Garantir que a API armazene senhas seguras <br>
• [ ] Garantir que a API isole as operacões por casos de uso<br>

 ## A API deve ter os seguintes casos de uso:

• [ ] Listar médicos <br>
   &ensp;  ◦ [] Incluir no retorno a agenda de cada médico <br>
• [ ] Obter dados do médico <br>
  &ensp;   ◦ [ ] Garantir que o ID de um médico foi enviado na chamada  ◦ Request <br>
  &ensp;   ◦ [ ] Garantir que o ID do médico existe <br>
  &ensp;   ◦ [ ] Retornar os dados do mnédico com a agenda <br>
• [ ] Obter dados do paciente <br>
  &ensp;   ◦ [ ] Garantir o acesso somente a usuários autenticados  ◦ Request <br>
   &ensp;  ◦ [ ] Garantir que o Telefone de um paciente foi enviado na chamada  ◦ Requesrt <br>
   &ensp;  ◦ [ ] Garantir que o Telefone e de um paciente que existe <br>
    &ensp; ◦ [ ] Incluir no retorno os agendamentos <br>
• [ ] Criar conta do paciente <br>
  &ensp;  ◦ [ ] Criar conta com none, telefone e senha<br>
  &ensp;  ◦ [ ] Garantir somente um usuário por telefone<br>
• [ ] Fazer login do paciente <br>
  &ensp;  ◦ [ ] Garantir que o telefone é de um cadastro válido <br>
• [ ] Adicionar agendamento para o paciente <br>
  &ensp;  ◦ [ ] Garantir que foi anviado o paciente e o id de agenda disponivel ⁃ Request <br>
  &ensp;  ◦ [ ] Garantir que a agenda está disponivel<br>

 # Tabelas do sistema

• [ ] Patient Paciente<br>
   &ensp;    ◦ Campos: ID, UserID, Name, Phone, CreatedAt. <br>
   &ensp;   ◦ Relações: Appointments[], User<br>
• [ ] User <br>
  &ensp;     ◦ Campos: ID, Phone, Password, CreatedAt <br>
  &ensp;     ◦ Relações: Patient<br>
• [ ] Appointment <br>
   &ensp;    ◦ Campos: ID, Date, Made, PatientID, DoctorID, CreatedAt_ <br>
   &ensp;    ◦ Relações: Patient, Doctor<br>
• [ ] Doctor  <br>
  &ensp;     ◦ Campos: ID, FirstName, LastName, City, State, Speciality, Bio, Picture, Price, Availability, Experience, Attendances,  Address, CreatedAt<br>
    &ensp;   ◦ Relações: Agenda, Appointment<br>
• [ ] Agenda<br>
    &ensp;   ◦ Campos: ID, Date, Available, DoctorID, CreatedAt<br>
    &ensp;   ◦ Relações: Agenda, Appointment
<br>

