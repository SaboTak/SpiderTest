const mongoose = require('mongoose');

const URI= process.env.MONGODB_URI;

mongoose.connect(URI,{
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});


const connection = mongoose.connection;

connection.once('open',() => {
    console.log('DB Conectada');
})