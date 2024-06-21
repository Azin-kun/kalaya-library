'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bukus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here\
      Bukus.hasMany(models.Pinjams, { foreignKey: 'kode_buku' });
    }
  }
  Bukus.init({
    kode_buku: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    judul_buku: DataTypes.STRING,
    pengarang: DataTypes.STRING,
    kategori: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    tahun_terbit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bukus',
  });
  return Bukus;
};