'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Petugas extends Model {
    static associate(models) {
      // define association here
      Petugas.hasMany(models.Pinjam, { foreignKey: 'id_petugas' });
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
    // hasing password with bcrypt before saving to db
    hooks: {
      beforeCreate: (petugas) => {
        petugas.password = bcrypt.hashSync(petugas.password, 10);
      }
    }
  });
  return Petugas;
};
