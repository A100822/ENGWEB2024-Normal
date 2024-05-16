var express = require('express');
var router = express.Router();
var ControllerContracts = require('../controllers/contratos')

// GET /contratos
router.get('/', function(req, res, next) {
    if (req.query.entidade) {
        // replace %20 with space
        req.query.entidade = req.query.entidade.replace(/%20/g, " ")
        ControllerContracts.contracts_entidade(req.query.entidade)
    .then(dados =>
        res.status(200).jsonp(dados)
    )
    .catch(erro => res.status(520).jsonp(erro))
    }
    else if (req.query.tipo) {
        // replace %20 with space
        req.query.tipo = req.query.tipo.replace(/%20/g, " ")
        ControllerContracts.contracts_tipo(req.query.tipo)
    .then(dados =>
        res.status(200).jsonp(dados)
    )
    .catch(erro => res.status(520).jsonp(erro))
    }
    else {
        ControllerContracts.contracts_list()
    .then(dados => 
        res.status(200).jsonp(dados)
    )
    .catch(erro => res.status(520).jsonp(erro))
}
});

router.get('/:id', function(req, res, next) {
    ControllerContracts.contracts_id(req.params.id)
    .then(dados => 
        res.status(200).jsonp(dados)
    )
    .catch(erro => res.status(520).jsonp(erro))
});

router.get('/entidades', function(req, res, next) {
    return Contrato.distinct("entidade_comunicante")
    .sort()
    .exec((err, entidades) => {
        if (err) {
            console.error(err);
            return;
        }
        return entidades
    });
});

router.get('/tipos', function(req, res, next) {
    return Contrato.distinct("tipoprocedimento")
    .sort()
    .exec((err, tipos) => {
        if (err) {
            console.error(err);
            return;
        }
        return tipos
    });
});

router.post('/', function(req, res, next) {
    ControllerContracts.contracts_create(req.body)
    .then(dados => 
        res.status(200).jsonp(dados)
    )
    .catch(erro => res.status(520).jsonp(erro))
});

router.delete('/:id', function(req, res, next) {
    ControllerContracts.contracts_delete(req.params.id)
    .then(dados => 
        res.status(200).jsonp(dados)
    )
    .catch(erro => res.status(520).jsonp(erro))
});

router.put('/:id', function(req, res, next) {
    ControllerContracts.contracts_update(req.params.id, req.body)
    .then(dados => 
        res.status(200).jsonp(dados)
    )
    .catch(erro => res.status(520).jsonp(erro))
});


module.exports = router;
