const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');


class PersonaService {
  constructor() { };



  async create(data) {
    const newPersona = await models.Persona.create(data);
    return newPersona;
  }

  async find() {
    const respuesta = await models.Persona.findAll({
      order: [['id', 'ASC']],
    });
    return respuesta;
  }

  async findOne(id) {
    const persona = models.Persona.findByPk(id, {
      include: ['hijos']
    });
    if (!persona) {
      throw boom.notFound('Persona no encontrada');
    }
    return persona;
  }

  async update(id, cambios) {
    const persona = await this.findOne(id);
    const respuesta = await persona.update(cambios)
    return respuesta;
  }

  async delete(id) {
    const persona = await this.findOne(id);
    await persona.destroy();
    return { id };
  }

}
module.exports = PersonaService;
