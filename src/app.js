const express = require('express');
const app = express();
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const dotenv = require('dotenv');


dotenv.config();


// ...

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger.json')));

// ...

module.exports = app;