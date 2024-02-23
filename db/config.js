const mongoose = require('mongoose');

<<<<<<< HEAD
const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {});
        console.log("Base de datos conectada exitosamente");
    } catch (error) {
        throw new Error('Error al conectar a la base de datos', e);
=======
const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CNN, {});
        console.log('Base de datos conectada exitosamente');
    }catch(e){
        throw new Error('Error al conectar a la base de datos ', e);
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
    }
};

module.exports = {
    dbConnection
}