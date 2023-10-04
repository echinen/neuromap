const express = require('express')
const router = express.Router()
const teacher_controller = require('../controllers/teacher_controller')

// all teacher routes
router.get('/teacher', teacher_controller.getAllTeachers)

module.exports = router
