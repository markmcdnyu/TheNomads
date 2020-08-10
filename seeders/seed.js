'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('items', [{
            name: 'chair',
            price: 10.00
        }], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('items', null, {});
    }
};