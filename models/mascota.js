<<<<<<< HEAD
const { Schema, model } = require ('mongoose');

const mascotaSchema = Schema({
=======
const { Schema, model } = require('mongoose');

const MascotaSchema = Schema({
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
<<<<<<< HEAD
    tipo: {
        type: String,
        required: [true,'El tipo de mascota es requerido']
    },
    raza: {
        type: String,
        required: [true, 'La raza es obligatoria']
    },
    color: {
        type: String,
        required: [true, 'El color es obligatorio']
    },
    edad: {
        type: String,
        required: [true, 'La edad es obligatoria']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Mascota', mascotaSchema);
=======
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
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
