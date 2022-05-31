const mongoose = require('mongoose')

var cidadeSchema = new mongoose.Schema({
    id:String,
    nome:String,
    população:Number,
    descrição:String,
    distrito:String,
    ligações:[
        {
            id:String,
            name:String,
            course:String,
            scores:[Number]
        }
    ]
})

module.exports = mongoose.model('mapa',cidadeSchema)
