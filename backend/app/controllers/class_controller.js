const Class = require('../models/class')

const getAllClasses = async (req, res, next) => {
    try {
        const result = await Class.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error('Erro ao consultar as aulas:', error);
        res.status(500).json({
            error: 'Error'
        })
    }
}

module.exports = {
    getAllClasses
}