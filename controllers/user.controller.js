
const { response } = require('express'); //Agg los modulos en controller Usuario

const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = async (req, res = response) => {

    const { limite, desde } = req.query;
    const query = { estado: true };

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        usuarios
    });
}

const getUsuarioById = async (req, res) => {

    const { id } = req.params;
    const usuario = await Usuario.findOne({ _id: id });

    res.status(200).json({
        usuario
    });
}

const usuariosPut = async (req, res) => {

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

    res.status(200).json({
        msg: 'Usuario eliminado exitosamente',
        usuario
    });
}

const usuariosPost = async (req, res) => {
    const { nombre, correo, password, role } = req.body;
    const usuario = new Usuario({ nombre, correo, password, role });

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    res.status(200).json({
        usuario
    });
}

module.exports = {
    usuariosPost,
    usuariosGet,
    getUsuarioById,
    usuariosPut,
    usuariosDelete
}