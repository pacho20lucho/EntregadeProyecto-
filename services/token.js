var jwt = require('jsonwebtoken');
const models = require('../models');
const config = require('../secret/config.js');

async function checkToken(token) {
    var __id = null;
    try {
        const { id } = await jwt.decode(token);
        __id = id;
    } catch (e) {
        return false;
    }
    console.log(__id);
    const user = await models.user.findOne({ where: { id: __id } });
    if (user) {
        const token = jwt.sign({ id: __id }, config.secret, { expiresIn: '1d' });
        return { tokenReturn:token };
    } else {
        return false;
    }
}

module.exports = {

    //generar el token
    encode: async(obj) => {
        //console.log(rol);
        const token = jwt.sign({ id: obj.id, name: obj.name, email: obj.email, lat: obj.lat,
            lng: obj.lng, car: obj.car }, config.secret, { expiresIn: 86400 });
        return token;
    },
    //permite decodificar el token
    decode: async(token) => {
        try {
            const { id } = await jwt.verify(token, config.secret,);
            const user = await models.user.findOne({ where: { id: id } });
            if (user) {
                return user;
            } else {
                return false;
            }
        } catch (e) {
            const newToken = await checkToken(token);
            return newToken;
        }

    }
}