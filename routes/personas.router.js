
const express = require('express');

const PersonaService = require('./../services/persona.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createPersonaSchema,
  updatePersonaSchema,
  getPersonaSchema
} = require('./../schemas/persona.schema');

const router = express.Router();
const service = new PersonaService();

router.get('/', async (req, res) => {
  const persona = await service.find();
  res.json(persona);
});

router.get('/filter', (req, res) => {
  res.send('este es un filtro');
});

router.get('/:id',
  validatorHandler(getPersonaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const persona = await service.findOne(id);
      res.json(persona);
    } catch (error) {
      next(error);
    }

  });

router.post('/',
  validatorHandler(createPersonaSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newPersona = await service.create(body);
    res.status(201).json(newPersona);
  }
);

router.patch('/:id',
  validatorHandler(getPersonaSchema, 'params'),
  validatorHandler(updatePersonaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const persona = await service.update(id, body);
      res.json(persona);
    } catch (error) {
      next(error);
    }

  }
);

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const respuesta = await service.delete(id);
    res.json(respuesta);
  } catch (error) {
    next(error);
  }

});



module.exports = router;
