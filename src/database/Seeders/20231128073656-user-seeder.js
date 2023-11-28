'use strict';
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const amountOfUsers = 100;

        const users = [];

        // users[0].getAttributes()

        const password = await bcrypt.hash("password", 12);
        for (let i = 0; i < amountOfUsers; i++) {

            const cities = await queryInterface.sequelize.query("select id from cities")

            const everyIdInTable = cities[0];
            const idArray = everyIdInTable.map((element) => element.id);
            const randomIndex = Math.floor(Math.random() * idArray.length);
            const randomIdFromTable = idArray[randomIndex];

            const user = {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                email_verified_at: faker.date.past(),
                phone: faker.phone.number(),
                phone_verified_at: faker.date.past(),
                password: password,
                city_id : randomIdFromTable,

            };
        
            users.push(user);
        }

        // for (const user of users) {
        //     const dataUser = await User.create(user, { include : UsersRoles })
        // }

        


        // console.log('USERS : ', users);

        await queryInterface.bulkInsert('users', users, {});

        const roles = await queryInterface.sequelize.query("select id from roles where name = 'ADMIN' limit 1");
        const role = roles[0];
        // console.log('role : ', role[0].id);


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
