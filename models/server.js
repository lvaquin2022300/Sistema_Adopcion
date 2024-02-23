const express = require('express');
const cors = require('cors');
const { dbConexion } = require('../db/config');

class Server {



    constructor() {
        this.app = express();
        this.puerto = process.env.PORT;

        this.conectarDB();
    }
    async conectarDB() {
        await dbConexion();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.puerto}`);
        });
    }
}

module.exports = Server;