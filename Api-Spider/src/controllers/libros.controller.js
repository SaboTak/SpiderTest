const librosCtrl = {};


librosCtrl.getLibros = (req,res) => res.json({message:[]});

librosCtrl.createLibro = (req,res) => res.json({message:'Libro Guardado!'});

librosCtrl.getLibro = (req,res) => res.json({message:{title: 'sabo'}});

librosCtrl.updateLibro = (req,res) => res.json({message:'Libro Actualizado!'});

librosCtrl.deleteLibro = (req,res) => res.json({message:'Libro Eliminado!'});



module.exports =librosCtrl