'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anggota extends Model {
    static associate(models) {
      // define association here
      Anggota.hasMany(models.Pinjam, { foreignKey: 'no_anggota' });
    }
  }
  Anggota.init({
    no_anggota: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_anggota: DataTypes.STRING,
    alamat: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    ttl: DataTypes.DATE,
    prodi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Anggota',
  });
  return Anggota;
};