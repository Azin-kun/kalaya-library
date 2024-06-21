'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Buku', {
      kode_buku: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul_buku: {
        type: Sequelize.STRING
      },
      pengarang: {
        type: Sequelize.STRING
      },
      kategori: {
        type: Sequelize.STRING
      },
      penerbit: {
        type: Sequelize.STRING
      },
      tahun_terbit: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Buku');
  }
};