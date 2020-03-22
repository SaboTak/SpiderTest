const express = require('express');
const cors = require('cors');
const app = express();

// Configuraciones
app.set('port',process.env.PORT || 4000);


//middlewares
app.use(cors());
app.use(express.json());


//routes
app.use('/api/libros', require('./routes/libros') )
app.use('/api/usuarios', require('./routes/usuarios') )


module.exports = app;