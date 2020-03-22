const { Router } = require('express');
const router =Router();

const { getLibros, createLibro, getLibro, updateLibro, deleteLibro } =  require('../controllers/libros.controller');


router.route('/')

    .get(getLibros)
    .post(createLibro)


//Se requiere id especifico

router.route('/:id')
    .get(getLibro)
    .put(updateLibro)
    .delete(deleteLibro)
    

module.exports = router;