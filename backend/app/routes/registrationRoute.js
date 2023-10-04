const express = require('express')
const router = express.Router()
const registration_controller = require('../controllers/registration_controller')

// all registration routes
router.get('/registration', registration_controller.getAllRegistrations)

module.exports = router
