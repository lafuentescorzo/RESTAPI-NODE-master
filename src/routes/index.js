const { Router } = require('express');
const router = Router();

const swagger = require('../swagger.json');

// Ruta raíz
router.get('/', (req, res) => {
  res.send('Welcome to my API');
});



router.get('/users', (req, res) => {
  const { users } = swagger.paths['/users'].get.responses['200'].schema.properties;
  res.json(users.example);
});

module.exports = router;