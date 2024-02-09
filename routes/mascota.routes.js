const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { existenteEmail, existeMascotaById, esRolValido } = require('../helpers/db-validators');

const { mascotasPost, mascotasGet, getMascotaByid, mascotasPut, mascotasDelete } = require('../controllers/mascota.controller');
const router = Router();

router.get("/", mascotasGet);

// Separacion de codigo

router.get(
    "/:id",
    [
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], getMascotaByid);

router.put(
    "/:id",
    [
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], mascotasPut);

router.delete(
    "/:id",
    [
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], mascotasDelete);


router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("edad", "El password debe ser mayor a 6 caracteres").isLength({ min: 6, }),
        check("raza", "Este no es un correo válido").isEmail(),
        check("servicio").custom(existenteEmail),
        check("role").custom(esRolValido),
        validarCampos,
    ], mascotasPost);

module.exports = router;