const express = require("express");
const aplicacao = express();
const rotas = require("./routes/router");
const bodyParser = require("body-parser");

aplicacao.set("views", "./views");
aplicacao.set("view engine", "ejs");
aplicacao.use(express.static(__dirname + "/public"));

aplicacao.use(express.json());

aplicacao.use(bodyParser.urlencoded({ extended: false }));

aplicacao.use("/", rotas);

aplicacao.listen(3000, function () {
  console.log("Servidor web criado através de Express");
});
