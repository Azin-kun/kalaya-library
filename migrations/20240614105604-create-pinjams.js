'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pinjams', {
      kode_pinjam: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tgl_pinjam: {
        type: Sequelize.DATE,
        allowNull: false
      },
      tgl_kembali: {
        type: Sequelize.DATE,
        allowNull: false
      },
      no_anggota: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Anggotas',
          key: 'no_anggota'
        }
      },
      id_petugas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Petugas',
          key: 'id_petugas'
        }
      },
      jumlah_buku: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      kode_buku: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Bukus',
          key: 'kode_buku'
        }
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
    await queryInterface.dropTable('Pinjams');
  }
};
