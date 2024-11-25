'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'members',
      [
        {
          student_id: 520213881,
          fname: 'John',
          lname: 'Doe',
          service_hrs: 0,
          GPA: 3.442,
          phone_num: '412-512-1251',
          street: 'Foo Rd.',
          city: 'Bar',
          state: 'MO',
          zip: 123565,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_id: 1235132,
          fname: 'John',
          lname: 'Doe',
          service_hrs: 0,
          GPA: 2.512,
          phone_num: '412-512-1251',
          street: 'Foo Rd.',
          city: 'Bar',
          state: 'MO',
          zip: 7254,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          student_id: 5123532,
          fname: 'John',
          lname: 'Doe',
          service_hrs: 0,
          GPA: 3.16,
          phone_num: '412-512-1251',
          street: 'Foo Rd.',
          city: 'Bar',
          state: 'MO',
          zip: 987243,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:     */
    await queryInterface.bulkDelete('members', null, {});

  }
};
