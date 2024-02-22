const { Schema, model } = require ('mongoose');

const mascotaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
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