const {Sequelize} =require('sequelize')
const sequelize = new Sequelize('nodemvc','root','',{
    host : 'localhost',
    dialect : 'mysql'
})

try {
    sequelize.authenticate()
    console.log('conectado ao banco !')
  
} catch (error) {
    console.log(error)
}

exports.default = sequelize