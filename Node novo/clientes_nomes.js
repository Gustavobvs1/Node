const Sequelize = require("sequelize");
const database  = require("./conexao");
const clientes = require("./clientes");

const clienteNome = clientes.findAll({
    attributes: ['nome']
})

console.log(clienteNome)
module.exports = clienteNome