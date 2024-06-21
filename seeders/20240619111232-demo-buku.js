'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bukus', [{
      judul_buku: 'Introduction to Algorithms',
      pengarang: 'Thomas H. Cormen',
      kategori: 'Computer Science',
      penerbit: 'MIT Press',
      tahun_terbit: 2009,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      judul_buku: 'Clean Code',
      pengarang: 'Robert C. Martin',
      kategori: 'Software Engineering',
      penerbit: 'Prentice Hall',
      tahun_terbit: 2008,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bukus', null, {});
  }
};
