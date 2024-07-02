drop database if exists db_educatec;
create database db_educatec;
use db_educatec;

create table tbl_usuarios(
    id              int auto_increment,
    login           varchar(30) not null,
    senha           varchar(30) not null,
    tipo_usuario    enum('Aluno', 'Professor', 'Admin'),
    constraint pk_user primary key(id),
    constraint login unique (login)
);


create table tbl_endereco(
    id              int auto_increment,
    cep             varchar(9) not null,
    rua      		varchar(100),
    numero          varchar(10),
    complemento     varchar(50),
    bairro          varchar(50),
    cidade          varchar(50),
    estado          varchar(2),
    constraint pk_endereco primary key(id)
);

create table tbl_aluno(
    id              int auto_increment,
    nome            varchar(50) not null,
    data_nascimento date not null,
    telefone        varchar(11),
    email           varchar(50),
    sexo            enum('Masculino', 'Feminino'),
    id_endereco     int,
    constraint pk_aluno primary key(id),
    constraint fk_endereco_aluno foreign key (id_endereco) references tbl_endereco(id)
);

create table tbl_matricula(
    id              int auto_increment,
    id_aluno        int not null,
    ano             varchar(4) not null,
    semestre        varchar(1) not null,
    matricula       varchar(20) generated always as (concat(ano, semestre, id_aluno)),
    situacao        enum('aprovado', 'reprovado') not null,
    constraint pk_matricula primary key(id),
    constraint fk_aluno foreign key(id_aluno) references tbl_aluno(id)
);

create table tbl_professor(
    id              int auto_increment,
    nome            varchar(50) not null,
    data_nascimento date not null,
    telefone        varchar(11),
    email           varchar(50),
    id_endereco     int,
    constraint pk_professor primary key(id),
    constraint fk_endereco_prof foreign key (id_endereco) references tbl_endereco(id)
);


create table tbl_disciplina(
    id              int auto_increment,
    nome            varchar(30) not null,
    sigla           varchar(3),
    constraint pk_disciplina primary key(id)
);


create table tbl_turmas(
    id              int auto_increment,
    descricao       varchar(50),
    id_disciplina   int not null,
    data_inicio     date,
    data_fim        date,
    constraint pk_turma primary key(id),
    constraint fk_disciplina foreign key (id_disciplina) references tbl_disciplina(id)
);


create table tbl_horario(
    id              int auto_increment,
    descricao       varchar(15),
    constraint pk_horario primary key(id)
);


create table tbl_notas(
    id              int auto_increment,
    id_matricula    int not null,
    nota1           decimal(5, 2),
    nota2           decimal(5, 2),
    nota3           decimal(5, 2),
    nota4           decimal(5, 2),
    media           decimal(5, 2) generated always as ((nota1 + nota2 + nota3 + nota4) / 4),
    constraint pk_notas primary key(id),
    constraint fk_matricula foreign key (id_matricula) references tbl_matricula(id)
);

