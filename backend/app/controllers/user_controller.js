const user = require('../models/user')

const getAllUsers = async (req, res, next) => {
    try {
        const users = await user.findAll()
        res.status(200).json(users)
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