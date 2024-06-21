'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pinjams', [{
      tgl_pinjam: new Date('2023-01-01'),
      tgl_kembali: new Date('2023-01-15'),
      no_anggota: 1, 
      id_petugas: 1, 
      jumlah_buku: 1,
      kode_buku: 1, 
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tgl_pinjam: new Date('2023-02-01'),
      tgl_kembali: new Date('2023-02-15'),
      no_anggota: 2, 
      id_petugas: 2, 
      jumlah_buku: 2,
      kode_buku: 2, 
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pinjams', null, {});
  }
};
