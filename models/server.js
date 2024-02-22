const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

<<<<<<< HEAD
class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';
    this.mascotasPath = '/api/mascotas';

    this.conectarDB();

    this.middlewares();

    this.routes();

    this.routesMascota();
  }

  async conectarDB(){
    await dbConnection();
  }

  middlewares(){
    this.app.use(express.static('public'));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes(){
    this.app.use(this.usuariosPath, require('../routes/user.routes'));
  }

  routesMascota(){
    this.app.use(this.mascotasPath, require('../routes/mascotas.routes'));
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }

}



=======
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.mascotasPath = '/api/mascotas';


        this.conectarDB();

        this.middlewares();

        this.routes();
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
        this.app.use(this.mascotasPath, require('../routes/mascota.routes'));

    }



    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor ejecutado y escuchando en el puerto', this.port);
        });
    }
}


>>>>>>> bef3432adcd098e449b4537e87755eb47ae285c7
module.exports = Server;
