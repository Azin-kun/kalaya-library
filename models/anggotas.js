'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anggotas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Anggotas.hasMany(models.Pinjams, { foreignKey: 'no_anggota' });
    }
  }
  Anggotas.init({
    no_anggota: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_anggota: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    alamat: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    ttl: DataTypes.DATE,
    prodi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Anggotas',
  });
  return Anggotas;
};