const {Schema, model} = require('mongoose');

const usuarioSchema = new Schema({
    usuario: {
        type:String,
        required:true,
        trim: true,
        unique:true
    },
    contraseña: {
        type:String,
        required:true,
        trim: true,
        unique:true
    }
},{
    timestamps:true
})

module.exports = model('User',usuarioSchema);