const { Persona, PersonaSchema } = require('./persona.model');
const { Hijo, HijoSchema } = require('./hijo.model');


function setupModels(sequelize) {
  Persona.init(PersonaSchema, Persona.config(sequelize));
  Hijo.init(HijoSchema, Hijo.config(sequelize));

  Persona.associate(sequelize.models);
  Hijo.associate(sequelize.models);
}

module.exports = setupModels;
