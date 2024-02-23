<<<<<<< HEAD
const { Schema, model } = require('mongoose');


const UsuarioSchema = Schema({
    nombre: { 
        type: String, 
        required: [true, 'El nombre es obligatorio'] 
=======
const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },
<<<<<<< HEAD
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        enum:  ["ADMIN_ROLE", "USER_ROLE"]
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
=======
    img:{
        type: String
    },
    role:{
        type: String,
        required: true,
        enum: ["ADMIN_ROLE", "USER_ROLE"]
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
        type: Boolean,
        default: false
    }
});

<<<<<<< HEAD
/*UsuarioSchema.methods.toJASON = function(){
    const {__v, password,  ...usuario} = this.Object();
=======
/*UsuarioSchema.methods.toJSON = function(){
    const { __v, password, ...usuario} = this.Object();
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
    return usuario;
}*/

module.exports = model('Usuario', UsuarioSchema);