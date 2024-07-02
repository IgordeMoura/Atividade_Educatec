use db_educatec;

INSERT INTO tbl_usuarios (login, senha, tipo_usuario)
VALUES 
('admin', 'admin', 'Admin'),
('aluno', 'aluno', 'Aluno'),
('professor', 'professor', 'Professor');

INSERT INTO tbl_endereco (cep, rua, numero, complemento, bairro, cidade, estado) 
VALUES 
('01001-000', 'Rua Exemplo', '123', 'Apto 101', 'Centro', 'São Paulo', 'SP'),
('22041-001', 'Avenida Atlântica', '456', 'Cobertura', 'Copacabana', 'Rio de Janeiro', 'RJ'),
('04001-010', 'Rua Teste', '789', 'Fundos', 'Jardim Paulista', 'São Paulo', 'SP');

INSERT INTO tbl_aluno (nome, data_nascimento, telefone, email, sexo, id_endereco) 
VALUES 
('João Silva', '2000-01-01', '11999999999', 'joao.silva@example.com', 'Masculino', 1),
('Maria Oliveira', '1995-05-20', '21987654321', 'maria.oliveira@example.com', 'Feminino', 3),
('Carlos Souza', '1998-09-15', '11888888888', 'carlos.souza@example.com', 'Masculino', 2);

INSERT INTO tbl_professor (nome, data_nascimento, telefone, email, id_endereco) 
VALUES 
('Ana Santos', '1985-03-10', '11987654321', 'ana.santos@example.com', 2),
('Pedro Oliveira', '1980-07-25', '21900001111', 'pedro.oliveira@example.com', 1),
('Mariana Lima', '1975-12-05', '11999998888', 'mariana.lima@example.com', 3);

INSERT INTO tbl_disciplina (nome, sigla) 
VALUES 
('Matemática', 'MAT'),
('Português', 'POR'),
('História', 'HIS');

INSERT INTO tbl_turmas (descricao, id_disciplina, data_inicio, data_fim) 
VALUES 
('Turma Matutino 2023-1', 1, '2023-01-15', '2023-06-30'),
('Turma Vespertino 2023-1', 2, '2023-01-15', '2023-06-30'),
('Turma Noturno 2023-1', 3, '2023-01-15', '2023-06-30');

INSERT INTO tbl_horario (descricao) 
VALUES 
('Matutino'),
('Vespertino'),
('Noturno');

INSERT INTO tbl_matricula (id_aluno, ano, semestre, situacao) 
VALUES 
(1, '2023', '1', 'aprovado'),
(2, '2023', '1', 'aprovado'),
(3, '2023', '1', 'reprovado');


