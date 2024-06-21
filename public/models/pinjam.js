'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pinjam extends Model {
    static associate(models) {
      // define association here
      Pinjam.belongsTo(models.Anggota, { foreignKey: 'no_anggota' });
      Pinjam.belongsTo(models.Petugas, { foreignKey: 'id_petugas' });
      Pinjam.belongsTo(models.Buku, { foreignKey: 'kode_buku' });
    }
  }
  Pinjam.init({
    kode_pinjam: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tgl_pinjam: DataTypes.DATE,
    tgl_kembali: DataTypes.DATE,
    no_anggota: DataTypes.INTEGER,
    id_petugas: DataTypes.INTEGER,
    jumlah_buku: DataTypes.INTEGER,
    kode_buku: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pinjam',
  });
  return Pinjam;
};
