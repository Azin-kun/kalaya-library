'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pinjams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pinjams.belongsTo(models.Anggotas, { foreignKey: 'no_anggota' });
      Pinjams.belongsTo(models.Petugas, { foreignKey: 'id_petugas' });
      Pinjams.belongsTo(models.Bukus, { foreignKey: 'kode_buku' });
    }
  }
  Pinjams.init({
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
    modelName: 'Pinjams',
  });
  return Pinjams;
};