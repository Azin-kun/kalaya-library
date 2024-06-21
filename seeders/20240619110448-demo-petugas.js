'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword1 = await bcrypt.hash('zz', 10);
    const hashedPassword2 = await bcrypt.hash('zz', 10);
    return queryInterface.bulkInsert('Petugas', [{
      nama_petugas: 'Azin',
      username: 'azin',
      password: hashedPassword1,
      no_telp: '123456789',
      alamat: 'isekai',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama_petugas: 'asdasd',
      username: 'asdasd',
      password: hashedPassword2,
      no_telp: 'asdasd',
      alamat: 'asdasd',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Petugas', null, {});
  }
};
