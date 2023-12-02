'use strict';

const { PersonaSchema, PERSONA_TABLE } = require('./../models/persona.model');
const { HijoSchema, HIJO_TABLE } = require('./../models/hijo.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PERSONA_TABLE, PersonaSchema);
    await queryInterface.createTable(HIJO_TABLE, HijoSchema);

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PERSONA_TABLE);
    await queryInterface.dropTable(HIJO_TABLE);
  }
};
