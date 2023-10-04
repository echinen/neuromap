const Registration = require('../models/registration')

const getAllRegistrations = async (req, res, next) => {
    try {
        const result = await Registration.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error('Erro ao consultar as matriculas:', error);
        res.status(500).json({
            error: 'Error'
        })
    }
}

module.exports = {
    getAllRegistrations
}