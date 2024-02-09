const { response, json } = require('express');
const bcryptjs = require('bcryptjs');
const Mascota = require('../models/mascota');


const mascotasGet = async (req, res = response) => {
    const { limite, desde } = req.query;
    const query = { estado: true };

    const [total, mascotas] = await Promise.all([
        Mascota.countDocuments(query),
        Mascota.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        mascotas
    });
}

const getMascotaByid = async (req, res) => {
    const { id } = req.params;
    const mascota = await Mascota.findOne({ _id: id });

    res.status(200).json({
        mascota
    });
}


const mascotasPut = async (req, res) => {
    const { id } = req.params;

    //Revisar codigo
    const { _id, nombre, especie, raza, ...resto } = req.body;

    await Mascota.findByIdAndUpdate(id, resto);

    const mascota = await Mascota.findOne({ _id: id });

    res.status(200).json({
        msg: 'Mascota Actualizado exitosamente',
        mascota
    })
}


const mascotasDelete = async (req, res) => {
    const { id } = req.params;
    await Mascota.findByIdAndUpdate(id, { estado: false });

    const mascota = await Mascota.findOne({ _id: id });

    res.status(200).json({
        msg: 'Mascota eliminado exitosamente',
        mascota
    });
}

const mascotasPost = async (req, res) => {
    //JSSON CONT
    const { nombre, edad, especie, raza, servicio } = req.body;
    const mascota = new Mascota({ nombre, edad, especie, raza, servicio });

    const salt = bcryptjs.genSaltSync();
    mascota.especie = bcryptjs.hashSync(especie, salt);

    await mascota.save();
    res.status(200).json({
        mascota
    });

    module.exports = {
        mascotasDelete,
        mascotasPost,
        mascotasGet,
        getMascotaByid,
        mascotasPut
    }
}