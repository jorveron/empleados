const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class HijoService {
  constructor() { };

  async create(data) {
    const newHijo = await models.Hijo.create(data);
    return newHijo;
  }

  async find() {
    const respuesta = await models.Hijo.findAll({
      include: ['persona'],
      order: [['id', 'ASC']],
    });
    return respuesta;
  }

  async findOne(id) {
    const hijo = await models.Hijo.findByPk(id);
    if (!hijo) {
      throw boom.notFound('Hijo no encontrado');
    }
    return hijo;
  }

  async update(id, cambios) {
    const hijo = await this.findOne(id);
    const respuesta = await hijo.update(cambios);
    return respuesta;
  }

  async delete(id) {
    const hijo = await this.findOne(id);
    await hijo.destroy(id);
    return { id };
  }
}

module.exports = HijoService;
