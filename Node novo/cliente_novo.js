const Sequelize = require("sequelize");
const database = require("./conexao");
const clientes = require("./clientes");

const clienteNovo = clientes.create({
  nome: "Tetsuo",
  cpf: "54467436871",
  celular: "+55 (11) 961936513",
  datanasc: "2006-5-20",
});

module.exports = clienteNovo;
