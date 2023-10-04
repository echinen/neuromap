const express = require('express')
const router = express.Router()
const school_controller = require('../controllers/school_controller')

// all school routes
router.get('/school', school_controller.getAllSchools)

module.exports = router
