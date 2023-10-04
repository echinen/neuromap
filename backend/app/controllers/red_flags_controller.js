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

module.exports = {
    getAllRedFlags
}