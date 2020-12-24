//import models from '../models';
const db = require('../models');
const user = require('../models');

//const Categoria = require('../models').Categoria;

module.exports = {
    crearRuta: async(req, res, next) => {
        try {
            const reg = await db.ruta.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    cargarRutas: async(req, res, next) => {
        try {
            const reg = await db.ruta.findAll({
                attributes: ['idUser'],
                include: [{model: db.user,
                           attributes: ['lat', 'lng']}]
              });
            res.status(200).json(reg);
            console.log(JSON.stringify(reg));
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    /*query: async(req, res, next) => {
        try {
            const reg = await models.ruta.findOne({ id: req.query.id })
                .populate('categoria', { nombre: 1 });
            if (!reg) {
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    queryCodigo: async(req, res, next) => {
        try {
            const reg = await models.ruta.findOne({ codigo: req.query.codigo })
                .populate('categoria', { nombre: 1 });
            if (!reg) {
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    
    update: async(req, res, next) => {
        try {
            console.log(req.body);
            const reg = await models.ruta.update({ categoriaId: req.body.categoria, codigo: req.body.codigo, nombre: req.body.nombre, descripcion: req.body.descripcion, precio_venta: req.body.precio_venta, stock: req.body.stock }, { where: { id: req.body.id } });

            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    remove: async(req, res, next) => {
        try {
            const reg = await models.ruta.findByIdAndDelete({ id: req.body.id });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    activate: async(req, res, next) => {
        try {
            const reg = await models.ruta.update({ estado: 1 }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    deactivate: async(req, res, next) => {
        try {
            const reg = await models.ruta.update({ estado: 0 }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }*/
}