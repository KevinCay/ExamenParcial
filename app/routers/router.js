let express = require('express');
let router = express.Router();
 

const ejemplos = require('../controllers/ejemplo.controller.js');
const usuarios = require('../controllers/usuario.controller.js');
const proyectos = require('../controllers/proyecto.controller.js');

router.post('/api/ejemplos/create', ejemplos.create);
router.get('/api/ejemplos/all', ejemplos.retrieveAllEjemplos);
router.get('/api/ejemplos/buscar/:nombre', ejemplos.getEjemploByName);
router.get('/api/ejemplos/onebyid/:id', ejemplos.getEjemploById);
router.put('/api/ejemplos/update/:id', ejemplos.updateById);
router.delete('/api/ejemplos/delete/:id', ejemplos.deleteById);

router.post('/api/usuarios/create', usuarios.create);
router.get('/api/usuarios/all', usuarios.retrieveAllUsuarios);
router.get('/api/usuarios/buscar/:nombre', usuarios.getUsuarioByName);
router.get('/api/usuarios/onebyid/:id', usuarios.getUsuarioById);
router.put('/api/usuarios/update/:id', usuarios.updateById);
router.delete('/api/usuarios/delete/:id', usuarios.deleteById);

router.post('/api/proyectos/create', proyectos.create);
router.get('/api/proyectos/all', proyectos.retrieveAllProyectos);
router.get('/api/proyectos/buscar/:nombre', proyectos.getProyectoByName);
router.get('/api/proyectos/onebyid/:id', proyectos.getProyectoById);
router.put('/api/proyectos/update/:id', proyectos.updateById);
router.delete('/api/proyectos/delete/:id', proyectos.deleteById);

module.exports = router;



