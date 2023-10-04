const express = require('express')
const router = express.Router()
const mapping_controller = require('../controllers/mapping_controller')

// all mapping routes
router.get('/mapping', mapping_controller.getAllMappingss)

module.exports = router
