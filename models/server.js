const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const db = require('../db/connection');

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.paths = {
            userPath: '/api/user',
            uploadPath: '/uploads'
        };
        this.dbConnection();

        // middlewares
        this.middlewares();

        // routes
        this.routes()
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            throw new Error(error);
        }
    }

    middlewares() {

        //  read and parse body request
        this.app.use(express.json());


        // public directory
        this.app.use(express.static('public'));

        // CORS
        this.app.use(cors());

        // file upload
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/'
        }));
    }

    routes() {
        this.app.use(this.paths.userPath, require('../routes/participant'));
        this.app.use(this.paths.uploadPath, require('../routes/uploads'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server listening on port: ', this.port);
        });
    }

}


module.exports = Server;