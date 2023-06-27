const Task = require('../models/Task')

module.exports = class TaskController{

    static createTask(req,res){
        res.render('tasks/create')
    }
    static async createTasksave(req,res){
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        } 
       await task.save(task)
       res.redirect('/tasks')
    }
    static showTask(req,res){
        res.render('tasks/show')
    }

}