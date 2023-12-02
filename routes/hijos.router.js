const express = require('express');

const HijoService = require('./../services/hijo.service');
const validatorHandler = require('./../middlewares/validator.handler');

const {
  createHijoSchema,
  updateHijoSchema,
  getHijoSchema
} = require('../schemas/hijo.schema');


const router = express.Router();
const service = new HijoService();

router.get('/', async (req, res) => {
  const hijo = await service.find()
  res.json(hijo);
})


router.get('/filter', (req, res) => {
  res.send('filtro')
});

router.get('/:id',
  validatorHandler(getHijoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const hijo = await service.findOne(id);
      res.json(hijo)
    } catch (error) {
      next(error)
    }
  }
);

router.post('/',
  validatorHandler(createHijoSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newHijo = await service.create(body);
    res.status(201).json(newHijo);
  }
);

router.patch('/:id',
  validatorHandler(getHijoSchema, 'params'),
  validatorHandler(updateHijoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const hijo = await service.update(id, body);
      res.json(hijo);
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
    next(error)
  }
});

module.exports = router;
