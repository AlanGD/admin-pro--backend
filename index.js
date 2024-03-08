
const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { dbConnection } = require('./database/config')

// CREAR EL SERVIDOR DE EXPRESS
const app = express();

app.use( cors() );   

// DB CONECT
dbConnection();

// RUTAS 
// USER: AlanG PASS:252647
app.get( '/', (req, res) => {
    res.status(400).json({
        ok: true,
        msg: 'Hola mundo'
    })

});


app.listen( process.env.PORT, () =>{{
    console.log('servidor corrinedo en el puerto', + process.env.PORT);
}})

