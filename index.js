const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { config } = require('./config/config')
const pool = require('./libs/postgres.pool');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Saludos!');
})

app.get('/ping', async (req, res) => {
  const result = await pool.query('SELECT NOW')
  return res.json(result.rows[0]);
})

app.listen(config.port, () => {
  console.log(`Servidor escuchando en el puerto ${config.port}`);
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

