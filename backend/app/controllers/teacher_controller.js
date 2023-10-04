const Teacher = require('../models/teacher')

const getAllTeachers = async (req, res, next) => {
    try {
        const result = await Teacher.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error('Erro ao consultar os professores:', error);
        res.status(500).json({
            error: 'Error'
        })
    }
}

module.exports = {
    getAllTeachers
}