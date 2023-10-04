const express = require('express')
const router = express.Router()
const disorder_type_controller = require('../controllers/disorder_type_controller')

// all disorder-type routes
router.get('/disorder-type', disorder_type_controller.getAllDisorderTypes)

module.exports = router
