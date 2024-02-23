const express = require('express');
const cors = require('cors');
const { dbConexion } = require('../db/config');

class Server {

    async conectarDB() {
        await dbConexion();
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.conectarDB();
    }

}

module.exports = Server;