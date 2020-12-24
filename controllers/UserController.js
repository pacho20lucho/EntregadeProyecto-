const config = require('../secret/config.js');
const { user } = require('../models');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const token = require('../services/token.js');
exports.login = async(req, res, next) => {
    try {
        const usuario = await user.findOne({where: {email: req.body.email}})
        if(usuario){
            const passwordIsValid = bcrypt.compareSync(req.body.password, usuario.password);
            if(passwordIsValid){
                const datos = {
                    id: usuario.id, 
                    name: usuario.name, 
                    email: usuario.email, 
                    lat: usuario.lat, 
                    lng: usuario.lng, 
                    car: usuario.vehiculo
                };
                console.log(datos)
                let tokenR = await token.encode(datos);
                res.status(200).json({ auth: true, user: usuario, accessToken: tokenR });
            }else{
                res.status(401).send({ auth: false, tokenReturn: null, reason:
                    "Invalid Password!" });
            }
        }else{
            res.status(404).send( 'usuario Not Found.');
        }


    } catch {
        res.status(500).send('error');
        //next(error);


    }


}

    