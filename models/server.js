const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.paths = {
            userPath: '/api/user',
            uploadPath: '/uploads'
        };

        // middlewares
        this.middlewares();

        // routes
        this.routes()
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
        this.app.use(this.paths.userPath, require('../routes/user'));
        this.app.use(this.paths.uploadPath, require('../routes/uploads'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server listening on port: ', this.port);
        });
    }

}


module.exports = Server;