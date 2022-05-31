var Cidade= require('../models/cidade')
const mongoose = require('mongoose')


module.exports.listar = () => {
    return Cidade
        .find({},{_id:0,id:1,nome:1,distrito:1})
        .exec()
}

module.exports.listarPorID = (id) => {
    return Cidade
        .findOne({"id":id})
        .exec()
}

module.exports.listarCidades = () => {
    return Cidade
        .distinct('nome')
        .exec()
}

module.exports.listarDistrito = (distrito) => {
    return Cidade
        .find({"distrito":distrito},{_id:0,id:1,nome:1})
        .exec()
}

module.exports.listarDistritos = () => {
    return Cidade
        .distinct("distrito")
        .exec()
}

module.exports.ligacoesOrigem = (origem) => {
    return Cidade
        .distinct("distrito")
        .exec()
}

module.exports.ligacoesDistancia = (distancia) => {
    return Cidade
        .distinct("distrito")
        .exec()
}