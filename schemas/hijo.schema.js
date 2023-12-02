const Joi = require('joi');

const id = Joi.number().integer();
const hijo = Joi.string().min(4).max(100);
const edad = Joi.number().integer();
const personaId = Joi.number().integer();

const createHijoSchema = Joi.object({
  hijo: hijo.required(),
  edad: edad.required(),
  personaId: personaId.required(),
});

const updateHijoSchema = Joi.object({
  hijo: hijo,
  edad: edad,
  personaId: personaId.required(),
});

const getHijoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createHijoSchema, updateHijoSchema, getHijoSchema };


