const { response } = require('express');
const Mascota = require('../models/mascota');

const mascotasGet = async (req, res = response) =>{
    
    const { limite, desde } = req.query;
    const query = {estado: true};

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

const getMascotaById = async (req, res) =>{

    const {id} = req.params;
    const mascota = await Mascota.findOne({_id : id});

    res.status(200).json({
        mascota
    });
}

const mascotasPost = async(req, res) =>{
    const {nombre, tipo, raza, color, edad, estado} = req.body;
    const mascota = new Mascota({nombre, tipo, raza, color, edad, estado});

    await mascota.save();
    res.status(200).json({
        mascota
    });
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
}