var express = require('express');
var router = express.Router();
var ControllerContracts = require('../controllers/contratos')

router.get('/', function(req, res, next) {
  ControllerContracts.contracts_list()
        .then(dados => 
            res.render('home', {dadosj: dados})
        )
        .catch(erro => res.status(520).jsonp(erro))
});

router.get('/:id', function(req, res, next) {
  ControllerContracts.contracts_id(req.params.id)
  .then(dados => 
      res.render('contrato', {dadosj: dados})
  )
  .catch(erro => res.status(520).jsonp(erro))
});

router.get('/entidades/:nipc', function(req, res, next) {
  var nipc = parseInt(req.params.nipc);
  ControllerContracts.contracts_entidade_func(nipc)
  .then(dados => 
      res.render('entidades', {dadosj: dados})
  )
  .catch(erro => res.status(520).jsonp(erro))
});

module.exports = router;


