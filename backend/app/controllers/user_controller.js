const User = require('../models/user')

const getAllUsers = async (req, res, next) => {
    try {
        const result = await User.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error('Erro ao consultar os usuários:', error);
        res.status(500).json({
            error: 'Error'
        })
    }
}

module.exports = {
    getAllUsers
}