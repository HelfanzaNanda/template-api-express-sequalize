'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const cities = [
            {
                "name": "KABUPATEN CILACAP"
            },
            {
                "name": "KABUPATEN BANYUMAS"
            },
            {
                "name": "KABUPATEN PURBALINGGA"
            },
            {
                "name": "KABUPATEN BANJARNEGARA"
            },
            {
                "name": "KABUPATEN KEBUMEN"
            },
            {
                "name": "KABUPATEN PURWOREJO"
            },
            {
                "name": "KABUPATEN WONOSOBO"
            },
            {
                "name": "KABUPATEN MAGELANG"
            },
            {
                "name": "KABUPATEN BOYOLALI"
            },
            {
                "name": "KABUPATEN KLATEN"
            },
            {
                "name": "KABUPATEN SUKOHARJO"
            },
            {
                "name": "KABUPATEN WONOGIRI"
            },
            {
                "name": "KABUPATEN KARANGANYAR"
            },
            {
                "name": "KABUPATEN SRAGEN"
            },
            {
                "name": "KABUPATEN GROBOGAN"
            },
            {
                "name": "KABUPATEN BLORA"
            },
            {
                "name": "KABUPATEN REMBANG"
            },
            {
                "name": "KABUPATEN PATI"
            },
            {
                "name": "KABUPATEN KUDUS"
            },
            {
                "name": "KABUPATEN JEPARA"
            },
            {
                "name": "KABUPATEN DEMAK"
            },
            {
                "name": "KABUPATEN SEMARANG"
            },
            {
                "name": "KABUPATEN TEMANGGUNG"
            },
            {
                "name": "KABUPATEN KENDAL"
            },
            {
                "name": "KABUPATEN BATANG"
            },
            {
                "name": "KABUPATEN PEKALONGAN"
            },
            {
                "name": "KABUPATEN PEMALANG"
            },
            {
                "name": "KABUPATEN TEGAL"
            },
            {
                "name": "KABUPATEN BREBES"
            },
            {
                "name": "KOTA MAGELANG"
            },
            {
                "name": "KOTA SURAKARTA"
            },
            {
                "name": "KOTA SALATIGA"
            },
            {
                "name": "KOTA SEMARANG"
            },
            {
                "name": "KOTA PEKALONGAN"
            },
            {
                "name": "KOTA TEGAL"
            }
        ];


        await queryInterface.bulkInsert('cities', cities, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('cities', null, {});
    }
};
