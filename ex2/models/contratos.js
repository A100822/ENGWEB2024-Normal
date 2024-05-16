var mongoose = require('mongoose');

var contractsSchema = new mongoose.Schema({
    idcontrato : String,
    nAnuncio : String,
    tipoprocedimento : String,
    objectoContrato : String,
    dataPublicacao : String,
    dataCelebracaoContrato : String,
    precoContratual : String,
    prazoExecucao : Number,
    NIPC_entidade_comunicante : Number,
    entidade_comunicante : String,
    fundamentacao : String
},{ versionKey: false })

module.exports = mongoose.model('contratos', contractsSchema)