const { Schema, model } = require('mongoose');

const MascotaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    edad: {
        type: Boolean,
        required: [true, 'La edad de la mascota es obligatoria']
    },
    especie: {
        type: String,
        required: [true, 'La especie es obligatoria']
    },
    raza: {
        type: String,
        required: [true, 'La especie es obligatoria']
    },
    servicio: {
        type: String,
        required: [true, 'El tipo de servicio es obligatorio']
    }
});

/*UsuarioSchema.methods.toJSON = function(){
    const { __v, password, ...usuario} = this.Object();
    return usuario;
}*/

module.exports = model('Mascota', MascotaSchema);