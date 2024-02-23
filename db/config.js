const { throws } = require('assert');
const mongoose = require('mongoose');

const dbConexion = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {});
        console.log("DB conectada");
    } catch (e) {
        throw new Error('Error para poder conectar db', e);
    }
};

module.exports = {
    dbConexion
}   