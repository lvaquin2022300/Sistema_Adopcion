<<<<<<< HEAD
const { response } = require('express');
const Mascota = require('../models/mascota');

const mascotasGet = async (req, res = response) =>{
    
    const { limite, desde } = req.query;
    const query = {estado: true};
=======
const { response, json } = require('express');
const bcryptjs = require('bcryptjs');
const Mascota = require('../models/mascota');


const mascotasGet = async (req, res) => {
    const { limite, desde } = req.query;
    const query = { estado: true };
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7

    const [total, mascotas] = await Promise.all([
        Mascota.countDocuments(query),
        Mascota.find(query)
<<<<<<< HEAD
        .skip(Number(desde))
        .limit(Number(limite))
=======
            .skip(Number(desde))
            .limit(Number(limite))
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
    ]);

    res.status(200).json({
        total,
        mascotas
    });
}

<<<<<<< HEAD
const getMascotaById = async (req, res) =>{

    const {id} = req.params;
    const mascota = await Mascota.findOne({_id : id});
=======
const getMascotaByid = async (req, res) => {
    const { id } = req.params;
    const mascota = await Mascota.findOne({ _id: id });
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7

    res.status(200).json({
        mascota
    });
}

<<<<<<< HEAD
const mascotasPost = async(req, res) =>{
    const {nombre, tipo, raza, color, edad, estado} = req.body;
    const mascota = new Mascota({nombre, tipo, raza, color, edad, estado});
=======

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
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7

    await mascota.save();
    res.status(200).json({
        mascota
    });
<<<<<<< HEAD
}

const mascotasPut = async (req, res) =>{
    
    const { id } = req.params;
    const {_id, ...resto} = req.body;

    await Mascota.findByIdAndUpdate(id, resto);
    const mascota = await Mascota.findOne({_id: id});

    res.status(200).json({
        msg: 'Mascota Actualizada existosamente',
        mascota
    });
}

const mascotaDelete = async (req, res) =>{
    
    const { id } = req.params;

    await Mascota.findByIdAndUpdate(id,{estado: false});
    const mascota = await Mascota.findOne({_id: id});

    res.status(200).json({
        msg: 'Mascota eliminada exitosamente',
        mascota
    });
}
module.exports = {
    mascotasGet,
    getMascotaById,
    mascotasPost,
    mascotasPut,
    mascotaDelete
=======

    module.exports = {
        mascotasDelete,
        mascotasPost,
        mascotasGet,
        getMascotaByid,
        mascotasPut
    }
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
}