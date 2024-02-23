const { validationResult } = require('express-validator');

<<<<<<< HEAD
const validarCampos = (req, res, next) =>{
    const error = validationResult(req);
    if(!error.isEmpty){
=======
const validarCampos = (req, res, next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
        return res.status(400).json(error);
    }

    next();
}

module.exports = {
    validarCampos
}