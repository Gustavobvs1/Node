const express = require("express");
const router = express.Router();
const clientes = require("../clientes");

router.get("/", function (req, res) {
  res.render("../views/secao/home.ejs");
  console.log("Home Page");
});

router.get("/cadastro", function (req, res) {
  res.render("../views/secao/cadastro_cliente.ejs", {
    mensagem: "",
  });
});

router.get("/tecnologia", function (req, res) {
  res.render("../views/secao/tecnologia.ejs");
});

router.get("/alteracao", function (req, res) {
  res.render("../views/secao/altera_cliente.ejs", {
    mensagem: "",
  });
});

router.post("/add_cliente", function (req, res) {
  clientes
    .create({
      nome: req.body.nome,
      cpf: req.body.cpf,
      celular: req.body.celular,
      datanasc: req.body.datanasc,
    })
    .then(function () {
      res.render("../views/secao/cadastro_cliente.ejs", {
        mensagem: "Cliente Criado com sucesso",
      });
    })
    .catch(function (erro) {
      res.render("../views/secao/cadastro_cliente.ejs", {
        mensagem: "Houve um " + erro,
      });
    });
});

router.post("/altera_cpf", function (req, res) {
  clientes
    .update(
      {
        cpf: req.body.cpf,
      },
      {
        where: { celular: req.body.celular },
      }
    )
    .then(function () {
      res.render("../views/secao/altera_cliente.ejs", {
        mensagem: "CPF alterado com sucesso",
      });
    })
    .catch(function (erro) {
      res.render("../views/secao/altera_cliente.ejs", {
        mensagem: "Houve um " + erro,
      });
    });
});

router.get("/lista_clientes", function (req, res) {
  clientes
    .findAll({ attributes: ["nome", "cpf", "celular"] })
    .then((clientes) =>
      res.render("../views/secao/lista_clientes.ejs", { clientes: clientes })
    );
});

module.exports = router;
