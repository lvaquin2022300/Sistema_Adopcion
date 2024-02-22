<<<<<<< HEAD
const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = async (req, res = response) => {

    const { limite, desde } = req.query;
    const query = { estado: true };
=======
const { response, json } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = async (req, res = response ) => {
    const { limite, desde } = req.query;
    const query = { estado: true};
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
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
        usuarios
    });
<<<<<<< HEAD
}

const getUsuarioById = async (req, res) => {

    const { id } = req.params;
    const usuario = await Usuario.findOne({ _id: id });
=======
} 

const getUsuarioByid = async (req, res) => {
    const { id } = req.params;
    const usuario = await Usuario.findOne({_id: id});
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7

    res.status(200).json({
        usuario
    });
}

const usuariosPut = async (req, res) => {
<<<<<<< HEAD

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    await Usuario.findByIdAndUpdate(id, resto);
    const usuario = await Usuario.findOne({ _id: id });

    res.status(200).json({
        msg: 'Usuario Actualizado existosamente',
        usuario
    });
}

const usuariosDelete = async (req, res) => {

    const { id } = req.params;

    await Usuario.findByIdAndUpdate(id, { estado: false });
    const usuario = await Usuario.findOne({ _id: id });
=======
    const { id } = req.params;
    const { _id, password, google, correo, ...resto} = req.body;

    await Usuario.findByIdAndUpdate(id, resto);

    const usuario = await Usuario.findOne({_id: id});

    res.status(200).json({
        msg: 'Usuario Actualizado exitosamente',
        usuario
    })
}

const usuariosDelete = async (req, res) => {
    const {id} = req.params;
    await Usuario.findByIdAndUpdate(id,{estado: false});

    const usuario = await Usuario.findOne({_id: id});
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7

    res.status(200).json({
        msg: 'Usuario eliminado exitosamente',
        usuario
    });
}

<<<<<<< HEAD
const usuariosPost = async (req, res) => {
    const { nombre, correo, password, role } = req.body;
    const usuario = new Usuario({ nombre, correo, password, role });
=======
const usuariosPost = async (req, res) =>{
    const { nombre, correo, password, role } = req.body;
    const usuario = new Usuario({nombre, correo, password, role});
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    res.status(200).json({
        usuario
    });
}

module.exports = {
<<<<<<< HEAD
    usuariosPost,
    usuariosGet,
    getUsuarioById,
    usuariosPut,
    usuariosDelete
}
=======
    usuariosDelete,
    usuariosPost,
    usuariosGet,
    getUsuarioByid,
    usuariosPut
}
>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
