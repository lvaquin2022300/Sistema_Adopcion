const { Router } = require('express');
const { check } = require('express-validator');

const { mascotasGet, getMascotaById, mascotasPost, mascotasPut, mascotaDelete } = require('../controllers/mascota.controller');

const router = Router();

router.get("/", mascotasGet);