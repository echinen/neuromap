-- Inserir usuários com perfil "admin"
INSERT INTO Usuario (nome, email, senha, perfil)
VALUES
  ('Admin1', 'admin1@example.com', 'senha123', 'admin'),
  ('Admin2', 'admin2@example.com', 'senha456', 'admin'),
  ('Admin3', 'admin3@example.com', 'senha789', 'admin');

-- Inserir dados fictícios na tabela "escola"
INSERT INTO Escola (nome, endereco, telefone)
SELECT
  CONCAT('Escola ', id),
  CONCAT('Endereço ', id),
  CONCAT('Telefone ', id)
FROM (
  SELECT ROW_NUMBER() OVER () AS id
  FROM information_schema.columns
  LIMIT 20
) AS t;

-- Inserir dados fictícios na tabela "professor"
INSERT INTO Professor (nome, sobrenome, email, telefone, escola_id)
SELECT
  CONCAT('Professor ', id),
  CONCAT('Sobrenome ', id),
  CONCAT('professor', id, '@email.com'),
  CONCAT('555-123-', id),
  FLOOR(RAND() * 20) + 1
FROM (
  SELECT ROW_NUMBER() OVER () AS id
  FROM information_schema.columns
  LIMIT 20
) AS t;

-- Inserir dados fictícios na tabela "aluno"
INSERT INTO Aluno (nome, sobrenome, idade, sexo, endereco, telefone, escola_id)
SELECT
  CONCAT('Aluno ', id),
  CONCAT('Sobrenome ', id),
  FLOOR(RAND() * 18) + 7, -- Idade entre 7 e 24 anos
  IF(RAND() > 0.5, 'Masculino', 'Feminino'), -- Sexo aleatório
  CONCAT('Endereço ', id),
  CONCAT('555-987-', id),
  FLOOR(RAND() * 20) + 1
FROM (
  SELECT ROW_NUMBER() OVER () AS id
  FROM information_schema.columns
  LIMIT 20
) AS t;

-- Inserir dados fictícios na tabela "turma"
INSERT INTO Turma (nome, ano_letivo, escola_id)
SELECT
  CONCAT('Turma ', id),
  '2023',
  FLOOR(RAND() * 20) + 1
FROM (
  SELECT ROW_NUMBER() OVER () AS id
  FROM information_schema.columns
  LIMIT 20
) AS t;

-- Inserir dados fictícios na tabela "matricula"
INSERT INTO Matricula (aluno_id, turma_id)
SELECT
  FLOOR(RAND() * 20) + 1,
  FLOOR(RAND() * 20) + 1
FROM (
  SELECT ROW_NUMBER() OVER () AS id
  FROM information_schema.columns
  LIMIT 20
) AS t;

-- Inserir dados fictícios na tabela "mapeamento"
INSERT INTO Mapeamento (tabela, esfera, pergunta, tipo_transtorno_id, resposta)
SELECT
  CONCAT('Tabela ', id),
  CONCAT('Esfera ', id),
  CONCAT('Pergunta ', id),
  FLOOR(RAND() * 2) + 1,
  CONCAT('Resposta ', id)
FROM (
  SELECT ROW_NUMBER() OVER () AS id
  FROM information_schema.columns
  LIMIT 20
) AS t;

-- Inserir dados fictícios na tabela "tipo_transtorno"
INSERT INTO Tipo_transtorno (nome)
SELECT
  CONCAT('Transtorno ', id)
FROM (
  SELECT ROW_NUMBER() OVER () AS id
  FROM information_schema.columns
  LIMIT 20
) AS t;