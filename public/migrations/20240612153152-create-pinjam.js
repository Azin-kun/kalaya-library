'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pinjam', {
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
          model: 'Anggota',
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
          model: 'Buku',
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pinjam');
  }
};