'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const data = [
            // { "name": "MANAGER" },
            // { "name": "CUSTOMER" },
            { "name": "ADMIN" },
        ];

        await queryInterface.bulkInsert('roles', data, {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('roles', null, {});
    }
};
