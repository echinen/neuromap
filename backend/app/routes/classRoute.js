const express = require('express')
const router = express.Router()
const class_controller = require('../controllers/class_controller')

// all class routes
router.get('/class', class_controller.getAllClasses)

module.exports = router
