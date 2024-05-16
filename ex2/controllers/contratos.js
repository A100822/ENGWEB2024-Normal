var Contracts = require("../models/contratos")
var mongoose = require('mongoose')
var objectId = mongoose.Types.ObjectId;

// GET /contracts
module.exports.contracts_list = function(){
    return Contracts.find({}, {}).limit(30)
    .then((docs) => {
        console.log("get mongo")
        return docs
    })
    .catch(err => {
      console.log(err);
      return err
    });
}

// GET /contratos/:id
module.exports.contracts_id = function(id){
    return Contracts.findOne({_id: id})
    .then((doc) => {
        return doc
    })
    .catch(err => {
        console.log(err);
        return err
    });
}

// GET /contratos?entidade=Freguesia%20de%20Candoso
module.exports.contracts_entidade = function(entidade){
    return Contracts.find({entidade_comunicante: entidade}, {})
    .then((docs) => {
        return docs
    })
    .catch(err => {
        console.log(err);
        return err
    });
}

// GET /contratos?tipo=AAA
module.exports.contracts_tipo = function(tipo){
    return Contracts.find({tipoprocedimento: tipo}, {})
    .then((docs) => {
        return docs
    })
    .catch(err => {
        console.log(err);
        return err
    });
}

// GET /contratos/entidades
module.exports.contracts_entidades = function(){
    return Contracts.distinct("entidade_comunicante")
    .then((docs) => {
        return docs
    })
    .catch(err => {
        console.log(err);
        return err
    });
}

// GET /contratos/tipos
module.exports.contracts_tipos = function(){
    return Contracts.distinct("tipoprocedimento")
    .then((docs) => {
        return docs
    })
    .catch(err => {
        console.log(err);
        return err
    });
}


// POST /contratos
module.exports.contracts_create = function(data){
    return Contracts.create(data)
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}
// DELETE /contratos/:id
module.exports.contracts_delete = function(id){
    return Contracts
    .deleteOne({_id: id})
    .then((doc) => {
        return doc
    })
    .catch(err => {
        console.log(err);
        return err
    });
}

module.exports.contracts_update = function(id, data){
    return Contracts
    .updateOne({_id: id}, data)
    .then((doc) => {
        return doc
    })
    .catch(err => {
        console.log(err);
        return err
    });
}

module.exports.contracts_entidade_func = function(nipc){
    return Contracts.find({NIPC_entidade_comunicante: nipc}, {})
    .then((docs) => {
        return docs
    })
    .catch(err => {
        console.log(err);
        return err
    });
    
}
