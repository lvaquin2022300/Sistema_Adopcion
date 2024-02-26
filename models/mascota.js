const { Schema, model } = require('mongoose');
const mascotaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del la mascota es obligatorio']
    },
    tipo: {
        type: String,
        required: [true, 'El tipo de mascota es obligatoriio']
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es necesaria']
    },
    raza: {
        type: String,
        required: [true, 'La raza es necesaria']
    },
    edad: {
        type: String,
        required: [true, 'Se necesita la edad de la mascota']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Mascota', mascotaSchema);