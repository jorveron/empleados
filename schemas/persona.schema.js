const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(4).max(100);
const nacimiento = Joi.date();
const sueldo = Joi.number().max(999999.99).precision(2);

const createPersonaSchema = Joi.object({
  nombre: nombre.required(),
  nacimiento: nacimiento.required(),
  sueldo: sueldo.required(),
});

const updatePersonaSchema = Joi.object({
  nombre: nombre,
  nacimiento: nacimiento,
  sueldo: sueldo,
});

const getPersonaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPersonaSchema, updatePersonaSchema, getPersonaSchema };
