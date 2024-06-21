'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {
    static associate(models) {
      // define association here
      Buku.hasMany(models.Pinjam, { foreignKey: 'kode_buku' });
    }
  }
  Buku.init({
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
    modelName: 'Buku',
  });
  return Buku;
};
