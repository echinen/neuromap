const express = require('express')
const router = express.Router()
const student_controller = require('../controllers/student_controller')

// all student routes
router.get('/student', student_controller.getAllStudents)

module.exports = router
