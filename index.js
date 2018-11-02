const express = require('express');
const morgan = require('morgan');

const app = express();
const env = process.env.NODE_ENV;
const port = process.env.PORT || 3000;

// Routing
const router = require('./router');
app.use('/', router);

// Logging
if (env !== 'test') {
  app.use(morgan('combined'));
}

app.listen(port, () => {
  if (env !== 'test') {
    console.log(`nusbus-api listening on port ${port}`);
  }
})

module.exports = app;
