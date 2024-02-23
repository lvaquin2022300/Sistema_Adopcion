const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { existeMascotaById } = require('../helpers/db validator');

const { mascotasGet, getMascotaById, mascotasPost, mascotasPut, mascotaDelete } = require('../controllers/mascota.controller');

const router = Router();

router.get("/", mascotasGet);

router.get(
    "/:id",
    [
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], getMascotaById);

module.exports = router;
