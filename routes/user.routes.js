const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
<<<<<<< HEAD
const { existenteEmail, existeUsuarioById } = require('../helpers/db validator');

const { usuariosPost, usuariosGet, getUsuarioById, usuariosPut, usuariosDelete } = require('../controllers/user.controller');
=======
const { existenteEmail, existeUsuarioById, esRolValido } = require('../helpers/db-validators');

const { usuariosPost, usuariosGet, getUsuarioByid, usuariosPut, usuariosDelete } = require('../controllers/user.controller');
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7

const router = Router();

router.get("/", usuariosGet);

router.get(
    "/:id",
    [
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeUsuarioById),
        validarCampos
<<<<<<< HEAD
    ], getUsuarioById);
=======
    ], getUsuarioByid);
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7

router.put(
    "/:id",
    [
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeUsuarioById),
        validarCampos
    ], usuariosPut);

router.delete(
    "/:id",
    [
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeUsuarioById),
        validarCampos
    ], usuariosDelete);

<<<<<<< HEAD
=======

>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
<<<<<<< HEAD
        check("password", "El password debe ser mayor a 6 caracteres").isLength({ min: 6 }),
        check("correo", "Correo electronico invalido").isEmail(),
        check("correo").custom(existenteEmail),
=======
        check("password", "El password debe ser mayor a 6 caracteres").isLength({ min: 6, }),
        check("correo", "Este no es un correo válido").isEmail(),
        check("correo").custom(existenteEmail),
        check("role").custom(esRolValido),
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
        validarCampos,
    ], usuariosPost);

module.exports = router;