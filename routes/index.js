const express = require('express');

const personasRouter = require('./personas.router');
const hijosRouter = require('./hijos.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/personas', personasRouter);
  router.use('/hijos', hijosRouter);
}

module.exports = routerApi;
