# Neuromap

- Este é o backend do projeto. Para rodar o proejto local, siga os passos abaixo:

1) Instale o Docker desktop seguindo o passo a passo

https://docs.docker.com/get-docker/

2) Execute o comando abaixo para instalar o MySql database usando uma imagem do Docker

`docker run --name neuromap-db -e MYSQL_ROOT_PASSWORD=Fiap123 -p 3306:3306 -d mysql:latest`

3) Configure todos as variaveis de ambiente do projeto (arquivo .env)

DB_PASSWORD=
DB_USER=
DB_HOST=
DB_PORT=
DB_NAME=

4) Com tudo configurado execute o projeto local na sua maquina

`npm start`