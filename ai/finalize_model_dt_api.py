# -*- coding: utf-8 -*-

import pandas as pd
from pycaret.classification import load_model, predict_model
from fastapi import FastAPI
import uvicorn
from pydantic import create_model

# Create the app
app = FastAPI()

# Load trained Pipeline
model = load_model("finalize_model_dt_api")

# Create input/output pydantic models
input_model = create_model("finalize_model_dt_api_input", **{'Não consegue prestar muita atenção a detalhes ou comete erros por descuido nos trabalhos da escola ou tarefas': 'Bastante', 'Tem dificuldade de manter a atenção em tarefas ou atividades de lazer': 'Bastante', 'Parece não estar ouvindo quando se fala diretamente com ele': 'Demais', 'Não segue instruções até o fim e não termina deveres de escola, tarefas ou obrigações': 'Demais', 'Tem dificuldade para organizar tarefas e atividades': 'Só um pouco', 'Evita, não gosta ou se envolve contra a vontade em tarefas que exigem esforço mental prolongado': 'Só um pouco', 'Perde coisas necessárias para atividades (p. ex: brinquedos, deveres da escola, lápis ou livros)': 'Demais', 'Distrai-se com estímulos externos': 'Só um pouco', 'É esquecido em atividades do dia-a-dia': 'Bastante', 'Mexe com as mãos ou pés ou se remexe na cadeira': 'Nem um pouco', 'Sai do lugar na sala de aula ou em outras situações em que se espera que fique sentado': 'Bastante', 'Corre de um lado para outro ou sobe demais nas coisas em situações em que isto é inapropriado': 'Bastante', 'Tem dificuldade em brincar ou envolver-se em atividades de lazer de forma calma': 'Nem um pouco', 'Não pára ou freqüentemente está a “mil por hora”': 'Nem um pouco', 'Fala em excesso': 'Só um pouco', 'Responde as perguntas de forma precipitada antes delas terem sido terminadas': 'Nem um pouco', 'Tem dificuldade de esperar sua vez': 'Demais', 'Interrompe os outros ou se intromete (por exemplo: intromete-se nas conversas, jogos, etc.)': 'Só um pouco', 'Gênero': 'Masculino', 'Idade': 22, 'Etnia': 'Preto', 'Renda familiar': '2 a 3 salários mínimos', 'Município': 'Embu-Guaçu', 'Microrregião': 'Itapecerica da Serra', 'Mesorregião': 'São Paulo', 'Unidade federativa': 'São Paulo', 'Região': 'Sudeste', 'Dependência administrativa': 'PRIVADA', 'Nível de ensino': 'EDUCAÇÃO BÁSICA', 'Etapa de ensino': 'ENSINO MÉDIO', 'Disciplina': 'Matemática', 'Eixo da disciplina': 'Ciências Humanas', 'Média geral': 3.5999999046325684, 'Frequência': '42%', 'Completude das tarefas': 'Bastante', 'Participação em discussões': 'Demais', 'Desenvolvimento de habilidades': 'Demais', 'Comparecimento às práticas laboratóriais': 'Demais', 'No geral o aluno apresenta um bom desempenho': 'Só um pouco', 'Tipo transtorno': 'Espectro Autista', 'Faixa etária': '+ 20 anos', 'QNT SNAP IV': 9},)
output_model = create_model("finalize_model_dt_api_output", prediction='Sim')



# Define predict function
@app.post("/predict", response_model=output_model)
def predict(data: input_model):
    data = pd.DataFrame([data.dict()])
    predictions = predict_model(model, data=data)
    return {"prediction": predictions["prediction_label"].iloc[0]}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
