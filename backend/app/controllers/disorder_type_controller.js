const Disorder_type = require('../models/disorder_type')

const getAllDisorderTypes = async (req, res, next) => {
    try {
        const result = await Disorder_type.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error('Erro ao consultar os tipos de distúrbios:', error);
        res.status(500).json({
            error: 'Error'
        })
    }
}

module.exports = {
    getAllDisorderTypes
}