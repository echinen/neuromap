-- DDL

-- Usuario
CREATE TABLE Usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  perfil VARCHAR(50) NOT NULL,
  createdAt datetime,
  updatedAt datetime
);

-- Escola
CREATE TABLE Escolas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  estado VARCHAR(50),
  cidade VARCHAR(100),
  endereco VARCHAR(255),
  telefone VARCHAR(20)
  createdAt datetime,
  updatedAt datetime
);

-- Professor
CREATE TABLE Professors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  sobrenome VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  telefone VARCHAR(20),
  escola_id INT,
  createdAt datetime,
  updatedAt datetime,
  FOREIGN KEY (escola_id) REFERENCES Escola(id)
);

-- Aluno
CREATE TABLE Alunos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  sobrenome VARCHAR(50) NOT NULL,
  idade INT,
  sexo ENUM('Masculino', 'Feminino', 'Outro'),
  cor VARCHAR(50) NOT NULL,
  endereco VARCHAR(255),
  telefone VARCHAR(20),
  escola_id INT,
  createdAt datetime,
  updatedAt datetime,
  FOREIGN KEY (escola_id) REFERENCES Escola(id)
);

-- Tipo transtorno
CREATE TABLE Tipo_transtornos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  createdAt datetime,
  updatedAt datetime
);

-- Mapeamento
CREATE TABLE Mapeamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tabela VARCHAR(50) NOT NULL,
  esfera VARCHAR(50),
  pergunta TEXT NOT NULL,
  tipo_transtorno_id INT,
  createdAt datetime,
  updatedAt datetime,
  FOREIGN KEY (tipo_transtorno_id) REFERENCES Tipo_transtorno(id)
);

-- Bandeira_vermelha
CREATE TABLE Bandeira_vermelhas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  aluno_id INT NOT NULL,
  mapeamento_id INT NOT NULL,
  resposta TEXT,
  createdAt datetime,
  updatedAt datetime,
  FOREIGN KEY (aluno_id) REFERENCES Aluno(id),
  FOREIGN KEY (mapeamento_id) REFERENCES Mapeamento(id)
);

-- Turma
CREATE TABLE Turmas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  ano_letivo YEAR,
  escola_id INT,
  createdAt datetime,
  updatedAt datetime,
  FOREIGN KEY (escola_id) REFERENCES escola(id)
);

-- Matricula
CREATE TABLE Matriculas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  aluno_id INT NOT NULL,
  turma_id INT NOT NULL,
  createdAt datetime,
  updatedAt datetime,
  FOREIGN KEY (aluno_id) REFERENCES aluno(id),
  FOREIGN KEY (turma_id) REFERENCES turma(id)
);