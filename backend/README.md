# Neuromap

Este é o backend do projeto.

## Sumário
- [1 Modelagem do banco de dados](#1-modelagem-do-banco-de-dados)
- [2 Arquitetura](#2-arquitetura)
- [3 Tech Stack](#3-tech-stack)
- [4 Estrutura de pastas](#4-estrutura-de-pastas)
- [5 Instalação e rodando local](#5-instalação-e-rodando-local)

## 1 Modelagem do banco de dados

https://miro.com/app/board/uXjVNeJLPUo=/?share_link_id=576335534112#tpicker-content

 ![Alt text](image.png)

## 2 Arquitetura
???

## 3 Tech Stack
???

## 4 Estrutura de pastas
```sh
.
└── ./app  
    ├── controllers           # 
    ├── database              # 
    ├── models                # 
    ├── routes                # 
    ├── services              # 
└── ./test                    # unit tests
```

## 5 Instalação e rodando local
-- Passo a passo para rodar a aplicação local

## 5.1 Instale o Docker desktop seguindo o passo a passo

https://docs.docker.com/get-docker/

## 5.2 Execute o comando abaixo para instalar o MySql database usando uma imagem do Docker

`docker run --name neuromap-db -e MYSQL_ROOT_PASSWORD=Fiap123 -p 3306:3306 -d mysql:latest`

## 5.3 Configure todos as variaveis de ambiente do projeto (arquivo .env)

DB_PASSWORD=
DB_USER=
DB_HOST=
DB_PORT=
DB_NAME=

## 5.4 Com tudo configurado execute o projeto local na sua maquina

`npm start`