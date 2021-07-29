const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.userPath = '/api/user';
        // middlewares
        this.middlewares();

        // routes
        this.routes()
    }

    middlewares() {

        //  read adn parse body request
        this.app.use(express.json());


        // public directory
        this.app.use(express.static('public'));

        // CORS
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.userPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server listening on port: ', this.port);
        });
    }

}


module.exports = Server;