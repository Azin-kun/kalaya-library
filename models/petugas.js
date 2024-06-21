'use strict';
const bcrypt = require('bcryptjs');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Petugas extends Model {
    static associate(models) {
      Petugas.hasMany(models.Pinjams, { foreignKey: 'id_petugas' });
    }
  }
  Petugas.init({
    id_petugas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_petugas: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Petugas',
    hooks: {
      beforeCreate: async (petugas) => {
        petugas.password = await bcrypt.hash(petugas.password, 10);
      }
    }
  });
  return Petugas;
};
