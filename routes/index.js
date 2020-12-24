const routerx = require('express-promise-router');
const usuarioRouter = require('./usuario.js');
const categoriaRouter = require('./categoria.js');
const articuloRouter = require('./articulo');
const mapaRouter = require('./mapa')


const router = routerx();

router.use('/usuario', usuarioRouter);
//.com/api/usuario

router.use('/mapa', mapaRouter);
//.com/api/mapa

router.use('/categoria', categoriaRouter);
//.com/api/categoria

router.use('/articulo', articuloRouter);
//.com/api/articulo

module.exports = router;