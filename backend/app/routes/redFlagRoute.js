const express = require('express')
const router = express.Router()
const red_flags_controller = require('../controllers/red_flags_controller')

// all red-flag routes
router.get('/red-flag', red_flags_controller.getAllRedFlags)

module.exports = router
