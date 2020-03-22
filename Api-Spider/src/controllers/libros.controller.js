const librosCtrl = {};

// Importar modelo
const Libro = require('../models/Libro')


//Peticiones

librosCtrl.getLibros = async (req,res) => {
    const libros = await Libro.find();
    res.json(libros)
};

librosCtrl.createLibro = async (req,res) => {
    const { titulo, imagen, precio, autor } = req.body;
    const newLibro = new Libro({
        titulo,
        imagen,
        precio,
        autor
    });
    await  newLibro.save();
    res.json({message:'Libro Guardado!'})
};

librosCtrl.getLibro =  async (req,res) => {
    const libro = await Libro.findById(req.params.id);
    res.json(libro)
};

librosCtrl.updateLibro = async (req,res) => {
    const {titulo, imagen, precio, autor} = req.body;
    await Libro.findOneAndUpdate({_id: req.params.id}, {
        titulo,
        imagen,
        precio,
        autor
    })
    res.json({message:'Libro Actualizado!'})
};



librosCtrl.deleteLibro = async (req,res) => {
    await Libro.findOneAndDelete({_id: req.params.id});

    res.json({message:'Libro Eliminado!'})
};



module.exports =librosCtrl