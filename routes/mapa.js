const router = require('express').Router();
const RutaController = require('../controllers/RutaController.js');

router.post('/ruta', RutaController.crearRuta);
router.get('/cargarrutas', RutaController.cargarRutas);


module.exports = router; 