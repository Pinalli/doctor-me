
 ## Requisitos da API

API deve garantir:

• [ ] Garantir que a API tenha um código limpo e de fácil manutenção 
• [ ] Garantir que a API tenha uma forma ágil de acesso ao banco de dados [prisma]
• [ ] Garantir que a API tenha um tratamento de erros 
• [ ] Garantir que a API não pare quando algum erro for retornado 
• [ ] Garantir que a API valide qualquer payload recebido 
• [ ] Garantir que a API armazene senhas seguras 
• [ ] Garantir que a API isole as operacões por casos de uso

 ## A API deve ter os seguintes casos de uso:

• [] Listar médicos 
    ⁃[] Incluir no retorno a agenda de cada nédico 
• [] Obter dados do médico 
     ◦[] Garantir que o ID de um médico foi enviado na chamada  ◦ Request 
     ◦[] Garantir que o ID do médico existe 
     ◦[] Retornar os dados do mnédico com a agenda 
• [] Obter dados do paciente 
     ◦ [] Garantir o acesso somente a usuários autenticados  ◦ Request 
     ◦ [] Garantir que o Telefone de um paciente foi enviado na chamada  ◦ Requesrt 
     ◦ [] Garantir que o Telefone e de um paciente que existe 
     ◦ [] Incluir no retorno os agendamentos 
• [] Criar conta do paciente 
    ◦ [] Criar conta com none, telefone e senha
    ◦ [] Garantir somente um usuário por telefone
• [] Fazer login do paciente 
    ◦ [] Garantir que o telefone é de um cadastro válido 
• [] Adicionar agendamento para o paciente 
    ◦ [] Garantir que foi anviado o paciente e o id de agenda disponivel ⁃ Request 
    ◦ [] Garantir que a agenda está disponivel

 # Tabelas do sistema

• [] Patient _Paciente_ 
     ◦ Campos: ID, UserID, Name, Phone, CreatedAt. 
     ◦ Relações: Appointments[], User_ 
• [] User 
     ◦ Campos: ID, Phone, Password, CreatedAt 
     ◦ Relações: Patient_
• [] Appointment 
     ◦ Campos: ID, Date, Made, PatientID, DoctorID, CreatedAt_ 
     ◦ Relações: Patient, Doctor_ 
• [] Doctor  
     ◦ Campos: ID, FirstName, LastName, City, State, Speciality, Bio, Picture, Price, Availability, Experience, Attendances,  Address, CreatedAt
     ◦ Relações: Agenda, Appointment
• [] Agenda
     ◦ Campos: ID, Date, Available, DoctorID, CreatedAt
     ◦ Relações: Agenda, Appointment


