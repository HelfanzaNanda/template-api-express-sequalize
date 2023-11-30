'use strict';
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const amountOfUsers = 100;

        const password = await bcrypt.hash("password", 12);
        const users = [{
            name: 'admin',
            email: 'admin@example.com',
            email_verified_at: new Date(),
            phone: faker.phone.number(),
            phone_verified_at: new Date(),
            password: password,
        }];
        for (let i = 0; i < amountOfUsers; i++) {

            const user = {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                email_verified_at: faker.date.past(),
                phone: faker.phone.number(),
                phone_verified_at: faker.date.past(),
                password: password,
            };
        
            users.push(user);
        }

        await queryInterface.bulkInsert('users', users, {});

        const roles = await queryInterface.sequelize.query("select id from roles where name = 'ADMIN' limit 1");
        const role = roles[0];

        const datausers = await queryInterface.sequelize.query("select id from users");
        const userses = datausers[0];

        const usersRoles = [];

        userses.forEach(user => {
            usersRoles.push({
                role_id : role[0].id,
                user_id : user.id
            })
        })
        await queryInterface.bulkInsert('users_roles', usersRoles, {});


    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', {}, {});
    }
};
