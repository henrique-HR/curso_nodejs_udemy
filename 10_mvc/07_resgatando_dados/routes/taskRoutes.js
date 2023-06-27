
const express = require('express')
const router = express.Router()

const taskController = require('../controllers/taskController')
router.get('/add', taskController.createTask)
router.post('/add', taskController.createTasksave)
router.get('/', taskController.showTask)


module.exports = router