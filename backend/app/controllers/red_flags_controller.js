const Red_flag = require('../models/red_flag')

const getAllRedFlags = async (req, res, next) => {
    try {
        const result = await Red_flag.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error('Erro ao consultar as Bandeiras vermelhas:', error);
        res.status(500).json({
            error: 'Error'
        })
    }
}

const checkPredictionFromAI = async (req, res, next) => {
    try {
        // pegar todas respostas x aluno
        // const result = await Red_flag.findAll()

        // TODO: pegar as perguntas da tabela Mapping
        
        // TODO: add chamada na api de AI e enviar os mapeamentos x respostas (alunos). Para identificar se aluno tem tendência a ter algum distúrbio mental.

        // TODO: salvar a resposta no banco de dados 
        res.status(200).json(result)
    } catch (error) {
        console.error('Erro ao consultar a API de AI:', error);
        res.status(500).json({
            error: 'Error'
        })
    }
}


module.exports = {
    getAllRedFlags,
    checkPredictionFromAI
}