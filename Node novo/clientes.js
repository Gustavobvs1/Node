const Sequelize = require("sequelize");
const database = require("./conexao");

const clientes = database.define("clientes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING(60),
    allowNull: false,
  },
  cpf: {
    type: Sequelize.CHAR(11),
    unique: true,
    allowNull: false,
  },
  celular: {
    type: Sequelize.CHAR(20),
    unique: true,
    allowNull: false,
  },
  datanasc: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

// clientes.sync({ force: true });

module.exports = clientes;
