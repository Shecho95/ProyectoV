const express = require('express');
const cors = require('cors');

class Server {
    
    constructor(){
        this.app = express();
        this.port = 3000;
        this.productsPath = '/api/productos';
        this.usersPath = '/api/usuarios';
        this.middlewares();
        this.routes();
    }

    
    middlewares(){ 
        //Funciones intermedias entre la solicitud del request y el controlador
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.productsPath, require('./routes/products'));
       // this.app.use(this.usersPath, require('../routes/Usuarios'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listening at http://localhost:${ this.port }`)
          });
    }

}

module.exports = Server;