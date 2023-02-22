'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cita.belongsTo (models.Usuario, {
        foreignKey: 'UsuarioId',
      })
    }
  }
  Cita.init({
    Dia: DataTypes.INTEGER,
    Mes: DataTypes.INTEGER,
    UsuarioId: DataTypes.INTEGER,
    Hora: DataTypes.STRING,
    Motivo:DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Cita',
  });
  return Cita;
};