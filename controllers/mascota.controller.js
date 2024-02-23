const { response } = require("express");
const MascotaG = require('../models/mascota');

const mascotaGet = async (req, res = response) => {

    const { limite, desd } = req.query;
    const query = { estado: true };


    const [total, mascotas] = await Promise.all([
        MascotaG.countDocuments(query),
        MascotaG.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        mascotas
    });
}

const getMascotaById = async (req, res) => {

    const { id } = req.params;
    const mascota = await Mascota.findOne({ _id: id });

    res.status(200).json({
        mascota
    });
}

module.exports = {
    mascotasGet,
    getMascotaById
}