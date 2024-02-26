const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.mascotasPath = '/api/mascotas';

        this.conectarDB();

        this.middlewares();

        this.routes();

        this.routesMascota();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user.routes'));
    }

    routesMascota() {
        this.app.use(this.mascotasPath, require('../routes/mascotas.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

}



module.exports = Server;