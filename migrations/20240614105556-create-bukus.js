'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bukus', {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bukus');
  }
};
