const express = require('express');
const stopsController = require('./controllers/stops');

const router = express.Router();

// Root
const apiInfo = require('./package.json');
router.get('/', (req, res) => {
  return res.json(apiInfo);
});

// Stops
router.get('/stops', stopsController.stops);

module.exports = router;
