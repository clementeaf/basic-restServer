const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.userPath = '/api/users';

        //Middleware
        this.middlewares();
        //Rutas de mi app

        this.routes()
    }

    middlewares(){
        //CORS 
        this.app.use(cors());

        //Read and parse
        this.app.use(express.json());

        //Directorio 'public'
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.userPath, require('../routes/user.routes'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`)
        });
    }
}

module.exports = Server;