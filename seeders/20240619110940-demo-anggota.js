'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Anggotas', [{
      nama_anggota: 'Alice',
      username: 'alice123',
      password: 'password123',
      alamat: '789 Maple St',
      no_telp: '5556667777',
      ttl: new Date('1990-01-01'),
      prodi: 'Computer Science',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama_anggota: 'Bob',
      username: 'bob123',
      password: 'password456',
      alamat: '321 Oak St',
      no_telp: '4445556666',
      ttl: new Date('1992-02-02'),
      prodi: 'Electrical Engineering',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Anggotas', null, {});
  }
};
