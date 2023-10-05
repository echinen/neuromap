-- Inserir usuários com perfil "admin"
INSERT INTO Usuarios (nome, email, senha, perfil, createdAt, updatedAt)
VALUES
  ('Eric', 'eric@neuromap.com', 'senha123', 'admin', NOW(), NOW()),
  ('Victor', 'victor@neuromap.com', 'senha456', 'admin', NOW(), NOW()),
  ('Aislan', 'aislan@neuromap.com', 'senha789', 'admin', NOW(), NOW()),
  ('Ariany', 'ariany@neuromap.com', 'senha789', 'admin', NOW(), NOW()),
  ('Sylvio', 'sylvio@neuromap.com', 'senha789', 'admin', NOW(), NOW())

-- Inserir dados fictícios na tabela "escola"
INSERT INTO Escolas (nome, descricao, estado, cidade, endereco, telefone, createdAt, updatedAt)
VALUES
  ('Escola A', 'Uma escola de ensino fundamental', 'São Paulo', 'São Paulo', 'Rua A, 123', '555-123-4567', NOW(), NOW()),
  ('Escola B', 'Uma escola de ensino médio', 'Rio de Janeiro', 'Rio de Janeiro', 'Avenida B, 456', '555-987-6543', NOW(), NOW()),
  ('Escola C', 'Uma escola de ensino fundamental', 'Minas Gerais', 'Belo Horizonte', 'Rua C, 789', '555-111-2222', NOW(), NOW()),
  ('Escola D', 'Uma escola de ensino médio', 'Bahia', 'Salvador', 'Avenida D, 789', '555-333-4444', NOW(), NOW()),
  ('Escola E', 'Uma escola de ensino fundamental', 'Paraná', 'Curitiba', 'Rua E, 567', '555-555-5555', NOW(), NOW()),
  ('Escola F', 'Uma escola de ensino médio', 'Santa Catarina', 'Florianópolis', 'Avenida F, 101', '555-777-8888', NOW(), NOW()),
  ('Escola G', 'Uma escola de ensino fundamental', 'Rio Grande do Sul', 'Porto Alegre', 'Rua G, 333', '555-999-0000', NOW(), NOW()),
  ('Escola H', 'Uma escola de ensino médio', 'Ceará', 'Fortaleza', 'Avenida H, 222', '555-222-3333', NOW(), NOW()),
  ('Escola I', 'Uma escola de ensino fundamental', 'Pernambuco', 'Recife', 'Rua I, 777', '555-444-5555', NOW(), NOW()),
  ('Escola J', 'Uma escola de ensino médio', 'Goiás', 'Goiânia', 'Avenida J, 444', '555-666-7777', NOW(), NOW()),
  ('Escola K', 'Uma escola de ensino fundamental', 'Amazonas', 'Manaus', 'Rua K, 555', '555-888-9999', NOW(), NOW()),
  ('Escola L', 'Uma escola de ensino médio', 'Espírito Santo', 'Vitória', 'Avenida L, 999', '555-999-1111', NOW(), NOW()),
  ('Escola M', 'Uma escola de ensino fundamental', 'Pará', 'Belém', 'Rua M, 111', '555-000-1111', NOW(), NOW()),
  ('Escola N', 'Uma escola de ensino médio', 'Alagoas', 'Maceió', 'Avenida N, 222', '555-222-1111', NOW(), NOW()),
  ('Escola O', 'Uma escola de ensino fundamental', 'Mato Grosso', 'Cuiabá', 'Rua O, 444', '555-333-1111', NOW(), NOW()),
  ('Escola P', 'Uma escola de ensino médio', 'Roraima', 'Boa Vista', 'Avenida P, 555', '555-444-1111', NOW(), NOW()),
  ('Escola Q', 'Uma escola de ensino fundamental', 'Acre', 'Rio Branco', 'Rua Q, 666', '555-555-1111', NOW(), NOW()),
  ('Escola R', 'Uma escola de ensino médio', 'Tocantins', 'Palmas', 'Avenida R, 777', '555-666-1111', NOW(), NOW()),
  ('Escola S', 'Uma escola de ensino fundamental', 'Rondônia', 'Porto Velho', 'Rua S, 888', '555-777-1111', NOW(), NOW()),
  ('Escola T', 'Uma escola de ensino médio', 'Mato Grosso do Sul', 'Campo Grande', 'Avenida T, 999', '555-888-1111', NOW(), NOW());


-- Inserir dados fictícios na tabela "professor"
INSERT INTO Professors (nome, sobrenome, email, telefone, escola_id, createdAt, updatedAt)
VALUES
  ('Professor A', 'SobrenomeA', 'professorA@example.com', '555-123-4567', 1, NOW(), NOW()),
  ('Professor B', 'SobrenomeB', 'professorB@example.com', '555-987-6543', 2, NOW(), NOW()),
  ('Professor C', 'SobrenomeC', 'professorC@example.com', '555-111-2222', 3, NOW(), NOW()),
  ('Professor D', 'SobrenomeD', 'professorD@example.com', '555-333-4444', 4, NOW(), NOW()),
  ('Professor E', 'SobrenomeE', 'professorE@example.com', '555-555-5555', 5, NOW(), NOW()),
  ('Professor F', 'SobrenomeF', 'professorF@example.com', '555-777-8888', 6, NOW(), NOW()),
  ('Professor G', 'SobrenomeG', 'professorG@example.com', '555-999-0000', 7, NOW(), NOW()),
  ('Professor H', 'SobrenomeH', 'professorH@example.com', '555-222-3333', 8, NOW(), NOW()),
  ('Professor I', 'SobrenomeI', 'professorI@example.com', '555-444-5555', 9, NOW(), NOW()),
  ('Professor J', 'SobrenomeJ', 'professorJ@example.com', '555-666-7777', 10, NOW(), NOW()),
  ('Professor K', 'SobrenomeK', 'professorK@example.com', '555-888-9999', 11, NOW(), NOW()),
  ('Professor L', 'SobrenomeL', 'professorL@example.com', '555-999-1111', 12, NOW(), NOW()),
  ('Professor M', 'SobrenomeM', 'professorM@example.com', '555-000-1111', 13, NOW(), NOW()),
  ('Professor N', 'SobrenomeN', 'professorN@example.com', '555-222-1111', 14, NOW(), NOW()),
  ('Professor O', 'SobrenomeO', 'professorO@example.com', '555-333-1111', 15, NOW(), NOW()),
  ('Professor P', 'SobrenomeP', 'professorP@example.com', '555-444-1111', 16, NOW(), NOW()),
  ('Professor Q', 'SobrenomeQ', 'professorQ@example.com', '555-555-1111', 17, NOW(), NOW()),
  ('Professor R', 'SobrenomeR', 'professorR@example.com', '555-666-1111', 18, NOW(), NOW()),
  ('Professor S', 'SobrenomeS', 'professorS@example.com', '555-777-1111', 19, NOW(), NOW()),
  ('Professor T', 'SobrenomeT', 'professorT@example.com', '555-888-1111', 20, NOW(), NOW());


-- Inserir dados fictícios na tabela "aluno"
INSERT INTO Alunos (nome, sobrenome, idade, sexo, cor, endereco, telefone, escola_id, createdAt, updatedAt)
VALUES
  ('Aluno 1', 'Sobrenome1', 15, 'Masculino', 'Branca', 'Endereço 1', '555-123-4567', 1, NOW(), NOW()),
  ('Aluno 2', 'Sobrenome2', 14, 'Feminino', 'Parda', 'Endereço 2', '555-987-6543', 2, NOW(), NOW()),
  ('Aluno 3', 'Sobrenome3', 16, 'Masculino', 'Negra', 'Endereço 3', '555-111-2222', 3, NOW(), NOW()),
  ('Aluno 4', 'Sobrenome4', 12, 'Feminino', 'Branca', 'Endereço 4', '555-333-4444', 4, NOW(), NOW()),
  ('Aluno 5', 'Sobrenome5', 13, 'Masculino', 'Parda', 'Endereço 5', '555-555-5555', 5, NOW(), NOW()),
  ('Aluno 6', 'Sobrenome6', 14, 'Feminino', 'Negra', 'Endereço 6', '555-777-8888', 6, NOW(), NOW()),
  ('Aluno 7', 'Sobrenome7', 15, 'Masculino', 'Branca', 'Endereço 7', '555-999-0000', 7, NOW(), NOW()),
  ('Aluno 8', 'Sobrenome8', 13, 'Feminino', 'Parda', 'Endereço 8', '555-222-3333', 8, NOW(), NOW()),
  ('Aluno 9', 'Sobrenome9', 14, 'Masculino', 'Negra', 'Endereço 9', '555-444-5555', 9, NOW(), NOW()),
  ('Aluno 10', 'Sobrenome10', 16, 'Feminino', 'Branca', 'Endereço 10', '555-666-7777', 10, NOW(), NOW()),
  ('Aluno 11', 'Sobrenome11', 15, 'Masculino', 'Parda', 'Endereço 11', '555-888-9999', 11, NOW(), NOW()),
  ('Aluno 12', 'Sobrenome12', 13, 'Feminino', 'Negra', 'Endereço 12', '555-999-1111', 12, NOW(), NOW()),
  ('Aluno 13', 'Sobrenome13', 14, 'Masculino', 'Branca', 'Endereço 13', '555-000-1111', 13, NOW(), NOW()),
  ('Aluno 14', 'Sobrenome14', 12, 'Feminino', 'Parda', 'Endereço 14', '555-222-1111', 14, NOW(), NOW()),
  ('Aluno 15', 'Sobrenome15', 15, 'Masculino', 'Negra', 'Endereço 15', '555-333-1111', 15, NOW(), NOW()),
  ('Aluno 16', 'Sobrenome16', 16, 'Feminino', 'Branca', 'Endereço 16', '555-444-1111', 16, NOW(), NOW()),
  ('Aluno 17', 'Sobrenome17', 14, 'Masculino', 'Parda', 'Endereço 17', '555-555-1111', 17, NOW(), NOW()),
  ('Aluno 18', 'Sobrenome18', 15, 'Feminino', 'Negra', 'Endereço 18', '555-666-1111', 18, NOW(), NOW()),
  ('Aluno 19', 'Sobrenome19', 13, 'Masculino', 'Branca', 'Endereço 19', '555-777-1111', 19, NOW(), NOW()),
  ('Aluno 20', 'Sobrenome20', 14, 'Feminino', 'Parda', 'Endereço 20', '555-888-1111', 20, NOW(), NOW());


-- Inserir dados fictícios na tabela "turma"
INSERT INTO Turmas (nome, ano_letivo, escola_id, createdAt, updatedAt)
VALUES
  ('Turma 1', '2023', 1, NOW(), NOW()),
  ('Turma 2', '2023', 2, NOW(), NOW()),
  ('Turma 3', '2023', 3, NOW(), NOW()),
  ('Turma 4', '2023', 4, NOW(), NOW()),
  ('Turma 5', '2023', 5, NOW(), NOW()),
  ('Turma 6', '2023', 6, NOW(), NOW()),
  ('Turma 7', '2023', 7, NOW(), NOW()),
  ('Turma 8', '2023', 8, NOW(), NOW()),
  ('Turma 9', '2023', 9, NOW(), NOW()),
  ('Turma 10', '2023', 10, NOW(), NOW()),
  ('Turma 11', '2023', 11, NOW(), NOW()),
  ('Turma 12', '2023', 12, NOW(), NOW()),
  ('Turma 13', '2023', 13, NOW(), NOW()),
  ('Turma 14', '2023', 14, NOW(), NOW()),
  ('Turma 15', '2023', 15, NOW(), NOW()),
  ('Turma 16', '2023', 16, NOW(), NOW()),
  ('Turma 17', '2023', 17, NOW(), NOW()),
  ('Turma 18', '2023', 18, NOW(), NOW()),
  ('Turma 19', '2023', 19, NOW(), NOW()),
  ('Turma 20', '2023', 20, NOW(), NOW());

-- Inserir dados fictícios na tabela "matricula"
INSERT INTO Matriculas (aluno_id, turma_id, createdAt, updatedAt)
VALUES
  (1, 1, NOW(), NOW()),
  (2, 2, NOW(), NOW()),
  (3, 3, NOW(), NOW()),
  (4, 4, NOW(), NOW()),
  (5, 5, NOW(), NOW()),
  (6, 6, NOW(), NOW()),
  (7, 7, NOW(), NOW()),
  (8, 8, NOW(), NOW()),
  (9, 9, NOW(), NOW()),
  (10, 10, NOW(), NOW()),
  (11, 11, NOW(), NOW()),
  (12, 12, NOW(), NOW()),
  (13, 13, NOW(), NOW()),
  (14, 14, NOW(), NOW()),
  (15, 15, NOW(), NOW()),
  (16, 16, NOW(), NOW()),
  (17, 17, NOW(), NOW()),
  (18, 18, NOW(), NOW()),
  (19, 19, NOW(), NOW()),
  (20, 20, NOW(), NOW());

-- Inserir dados fictícios na tabela "mapeamento"
INSERT INTO Mapeamentos (tabela, esfera, pergunta, tipo_transtorno_id, createdAt, updatedAt)
VALUES
  ('Atencao_a_Detalhes', 'Comportamental', 'Não consegue prestar muita atenção a detalhes ou comete erros por descuido nos trabalhos da escola ou tarefas', 1, NOW(), NOW()),
  ('Manter_a_Atencao', 'Comportamental', 'Tem dificuldade de manter a atenção em tarefas ou atividades de lazer', 1, NOW(), NOW()),
  ('Receptividade', 'Comportamental', 'Parece não estar ouvindo quando se fala diretamente com ele', 1, NOW(), NOW()),
  ('Seguir_Instrucoes', 'Comportamental', 'Não segue instruções até o fim e não termina deveres de escola, tarefas ou obrigações', 1, NOW(), NOW()),
  ('Organizacao', 'Comportamental', 'Tem dificuldade para organizar tarefas e atividades', 1, NOW(), NOW()),
  ('Esforco_Mental', 'Comportamental', 'Evita, não gosta ou se envolve contra a vontade em tarefas que exigem esforço mental prolongado', 1, NOW(), NOW()),
  ('Perder_Coisas', 'Comportamental', 'Perde coisas necessárias para atividades (p. ex: brinquedos, deveres da escola, lápis ou livros)', 1, NOW(), NOW()),
  ('Distratividade', 'Comportamental', 'Distrai-se com estímulos externos', 1, NOW(), NOW()),
  ('Esquecimento', 'Comportamental', 'É esquecido em atividades do dia-a-dia', 1, NOW(), NOW()),
  ('Inquietacao', 'Comportamental', 'Mexe com as mãos ou pés ou se remexe na cadeira', 1, NOW(), NOW()),
  ('Ficar_Sentado', 'Comportamental', 'Sai do lugar na sala de aula ou em outras situações em que se espera que fique sentado', 1, NOW(), NOW()),
  ('Hiperatividade', 'Comportamental', 'Corre de um lado para outro ou sobe demais nas coisas em situações em que isto é inapropriado', 1, NOW(), NOW()),
  ('Atividades_de_Lazer', 'Comportamental', 'Tem dificuldade em brincar ou envolver-se em atividades de lazer de forma calma', 1, NOW(), NOW()),
  ('Muita_Energia', 'Comportamental', 'Não pára ou freqüentemente está a “mil por hora”', 1, NOW(), NOW()),
  ('Falar_em_Excesso', 'Comportamental', 'Fala em excesso', 1, NOW(), NOW()),
  ('Respostas_Precipitadas', 'Comportamental', 'Responde as perguntas de forma precipitada antes delas terem sido terminadas', 1, NOW(), NOW()),
  ('Impaciencia', 'Comportamental', 'Tem dificuldade de esperar sua vez', 1, NOW(), NOW()),
  ('Interrupcao', 'Comportamental', 'Interrompe os outros ou se intromete (por exemplo: intromete-se nas conversas, jogos, etc.)', 1, NOW(), NOW()),
  ('Genero', 'Socioeconômico', 'Gênero', 1, NOW(), NOW()),
  ('Idade', 'Socioeconômico', 'Idade', 1, NOW(), NOW());


-- Inserir dados fictícios na tabela "tipo_transtorno"
INSERT INTO Tipo_transtornos (nome, createdAt, updatedAt)
VALUES
  ('TDAH', NOW(), NOW()),

