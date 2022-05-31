var express = require('express');
var router = express.Router();
var Cidade = require('../controllers/cidade')

/* GET home page. */
router.get('/cidades', function(req, res, next) {
  Cidade.listar()
      .then(dados => res.status(200).jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
});

router.get('/cidades/:id', function(req, res, next) {
  Cidade.listarPorID(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/cidades/nomes', function(req, res, next) {
  Cidade.listarCidades()
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/cidades?distrito=DDDD', function(req, res, next) {
  Cidade.listarDistrito(req.params.id) //mudar para o distrito que recebe
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/distritos', function(req, res, next) {
  Cidade.listarDistritos()
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/ligacoes?origem=XX', function(req, res, next) {
  Cidade.ligacoesOrigem(req.params.id) //mudar para origem que recebe
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/ligacoes?dist=YY', function(req, res, next) {
  Cidade.ligacoesDistancia(req.params.id) //mudar para a distancia que recebe
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
