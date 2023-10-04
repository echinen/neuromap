const Student = require('../models/student')

const getAllStudents = async (req, res, next) => {
    try {
        const result = await Student.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error('Erro ao consultar os estudantes:', error);
        res.status(500).json({
            error: 'Error'
        })
    }
}

module.exports = {
    getAllStudents
}