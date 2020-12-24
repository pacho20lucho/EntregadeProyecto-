'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ruta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: 'idUser' })
  }
  };
  ruta.init({
    idUser: DataTypes.INTEGER,
    cupo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ruta',
  });
  return ruta;
};