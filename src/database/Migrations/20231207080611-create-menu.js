'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('menus', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            parent_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                allowNull: true
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            path: {
                allowNull: false,
                type: Sequelize.STRING
            },
            method: {
                allowNull: false,
                type: Sequelize.STRING
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
        await queryInterface.dropTable('menus');
    }
};