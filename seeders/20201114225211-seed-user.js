'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$08$oLthcHx40ZoP2lusViMEJOvQMkUNZ5uCM.e9xHV7NjUhFo5JBM4ZO',
            direccion: "carrera 73 152b 67 bogota",
            lat: 4.741887, 
            lng: -74.068187,
            vehiculo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'luis',
            email: 'ejemplo1@gmail.com',
            password: '$2y$08$oLthcHx40ZoP2lusViMEJOvQMkUNZ5uCM.e9xHV7NjUhFo5JBM4ZO',
            direccion: "carrera 73 125 67 bogota",
            lat: 4.690791,
            lng: -74.088161,
            vehiculo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'lucia',
            email: 'ejemplo2@gmail.com',
            password: '$2y$08$oLthcHx40ZoP2lusViMEJOvQMkUNZ5uCM.e9xHV7NjUhFo5JBM4ZO',
            direccion: "carrera 64 100b 67 bogota",
            lat: 4.693725,
            lng: -74.088165,
            vehiculo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'alex',
            email: 'ejemplo3@gmail.com',
            password: '$2y$08$oLthcHx40ZoP2lusViMEJOvQMkUNZ5uCM.e9xHV7NjUhFo5JBM4ZO',
            direccion: "carrera 75 152b 67 bogota",
            lat: 4.693645,
            lng: -74.088846,
            vehiculo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'david',
            email: 'ejemplo4@gmail.com',
            password: '$2y$08$oLthcHx40ZoP2lusViMEJOvQMkUNZ5uCM.e9xHV7NjUhFo5JBM4ZO',
            direccion: "calle2 73b 15 bogota",
            lat: 4.624051740663013,
            lng: -74.14313548922283,
            vehiculo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'jorge',
            email: 'ejemplo5@gmail.com',
            password: '$2y$08$oLthcHx40ZoP2lusViMEJOvQMkUNZ5uCM.e9xHV7NjUhFo5JBM4ZO',
            direccion: "carrera 80 15 67 bogota",
            vehiculo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'lana',
            email: 'ejemplo6@gmail.com',
            password: '$2y$08$oLthcHx40ZoP2lusViMEJOvQMkUNZ5uCM.e9xHV7NjUhFo5JBM4ZO',
            direccion: "carrera 90 25 67 bogota",
            lat: 4.666973387876702,
            lng: -74.05764688985442,
            vehiculo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'martin',
            email: 'ejemplo7@gmail.com',
            password: '$2y$08$oLthcHx40ZoP2lusViMEJOvQMkUNZ5uCM.e9xHV7NjUhFo5JBM4ZO',
            direccion: "carrera 8 13sur 67 bogota",
            lat: 4.733060319736276,
            lng: -74.09282188837815,
            vehiculo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'julian',
            email: 'ejemplo8@gmail.com',
            password: '$2y$08$oLthcHx40ZoP2lusViMEJOvQMkUNZ5uCM.e9xHV7NjUhFo5JBM4ZO',
            direccion: "carrera 73 152b 67 bogota",
            lat: 4.577760135058571, 
            lng: -74.08802147451459,
            vehiculo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'jose',
            email: 'ejemplo9@gmail.com',
            password: '$2y$08$oLthcHx40ZoP2lusViMEJOvQMkUNZ5uCM.e9xHV7NjUhFo5JBM4ZO',
            direccion: "carrera 95 152b 67 bogota",
            vehiculo: false,
            lat: 4.733060319736276,
            lng: -74.09282188837815,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};