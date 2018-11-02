const express = require('express');

const router = express.Router();

const apiInfo = require('./package.json');
router.get('/', (req, res) => {
  return res.json(apiInfo);
});

module.exports = router;
