const express = require('express');
const morgan = require('morgan');

const app = express();
const env = process.env.NODE_ENV;
const port = process.env.PORT || 3000;

// Logging
if (env !== 'test') {
  app.use(morgan('combined'));
}

// Routing
const apiInfo = require('./package.json');
app.get('/', (req, res) => {
  return res.json(apiInfo);
});

app.listen(port, () => {
  if (env !== 'test') {
    console.log(`nusbus-api listening on port ${port}`);
  }
})

module.exports = app;
