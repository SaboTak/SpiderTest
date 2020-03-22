const {Schema, model} = require('mongoose');

const libroSchema = new Schema({
    titulo: String,
    imagen: String,
    precio:{
        type:Number,
        required:true
    },
    autor:String,
})

module.exports = model('Libro',libroSchema);