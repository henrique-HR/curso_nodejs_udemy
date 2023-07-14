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
        //validaçoes 
        // processar dados  
       await Task.create(task)
       res.redirect('/tasks')
    }
    static async showTask(req,res){
        const task =  await Task.findAll({raw: true})
        
        res.render('tasks/show',{task: task})
    }
    static async  removeTask(req,res){

        const id = req.body.id 
        
        await Task.destroy({where:{id:id}})

        res.redirect('/tasks')
    }



}