'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('menus_permissions', {
            menu_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            permission_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue : new Date(),
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue : new Date(),
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE
            },
            created_by: {
                allowNull : true,
                type : Sequelize.INTEGER
            },
            updated_by: {
                allowNull : true,
                type : Sequelize.INTEGER
            },
            deleted_by: {
                allowNull : true,
                type : Sequelize.INTEGER
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('menus_permissions');
    }
};