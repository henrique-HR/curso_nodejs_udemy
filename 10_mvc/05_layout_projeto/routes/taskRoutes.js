
const express = require('express')
const router = express.Router()

const taskController = require('../controllers/taskController')
router.get('/add', taskController.createTask)

router.get('/show', taskController.showTask)


module.exports = router