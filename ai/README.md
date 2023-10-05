# Neuromap

A inteligência artificial desenvolvida utiliza as características:
- Comportamentais
- Socioeconômicas
- Acadêmicas

Para realizar a predição se o aluno possui características similares a uma pessoa com Transtorno do Déficit de Atenção com Hiperatividade (TDAH).

Para realizar o *start* da aplicação é importante seguir os passos:

Linux
- Acesse terminal
- Acessando a pasta
`cd ./neuromap/ai`
- Digite o comando abaixo para criar um ambiente virtual:
`python -m venv venv`
- Digite o comando abaixo para ativar o ambiente criado:
`source venv/bin/activate`
- Execute o código para instalar as dependências:
`pip install -r requirements.txt`
- Execute o comando para iniciar a API da IA:
`python finalize_model_dt_api.py`
- Abra o navegador com a url abaixo:
`http://localhost:8000/docs`

Pronto agora você pode realizar os testes da API alterando os valores ou fazer as requisições com o próprio NeuroMap.

Docker

Windows
- Baixar e instalar o docker 
[Instalador do docker](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?_gl=1*1sg3hie*_ga*MjkwMjI2MzYzLjE2OTY0NjMzODU.*_ga_XJWPQMJYHQ*MTY5NjQ3Mzk5OC4yLjAuMTY5NjQ3Mzk5OC42MC4wLjA.)

- Acesse o powershell
- Acesse o diretório
`cd ./neuromap/ai`
- Digite o comando para criar a imagem docker:
`docker image build -f "Dockerfile" -t apineuromap:apineuromap .`
- Execute o comando para executar a sua imagem
`docker run -p 8000:8000 apineuromap`
- Abra o navegador com a url abaixo:
`http://localhost:8000/docs`