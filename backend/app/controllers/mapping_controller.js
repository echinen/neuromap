const Mapping = require('../models/mapping')

const getAllMappingss = async (req, res, next) => {
    try {
        const result = await Mapping.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error('Erro ao consultar os mapeamentos:', error);
        res.status(500).json({
            error: 'Error'
        })
    }
}

module.exports = {
    getAllMappingss
}