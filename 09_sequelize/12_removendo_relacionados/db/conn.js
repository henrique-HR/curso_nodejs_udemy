const {Sequelize}= require('sequelize') 

const sequelize =  new Sequelize("sequelize01","root","",{
    host :"localhost",
    dialect:"mysql"
})
module.exports = sequelize