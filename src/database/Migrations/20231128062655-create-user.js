'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
            },
            phone: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
            },
            email_verified_at: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: null,
            },
            phone_verified_at: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: null,
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            city_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE
            },
            created_by: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            updated_by: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            deleted_by: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};