const School = require('../models/school')

const getAllSchools = async (req, res, next) => {
    try {
        const result = await School.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error('Erro ao consultar as escolas:', error);
        res.status(500).json({
            error: 'Error'
        })
    }
}

module.exports = {
    getAllSchools
}