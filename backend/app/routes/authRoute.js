const express = require('express')
const router = express.Router()
const auth_controller = require('../controllers/auth_controller')

// all class routes
router.post('/login', auth_controller.Authentication)

module.exports = router
