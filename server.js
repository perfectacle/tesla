'use strict';
const express =  require('express');
const morgan = require('morgan');

const app = express();

// print the request log on console
app.use(morgan('dev'));

const PORT = 3000;

// server-open
app.use('/', express.static(`${__dirname}/app/dist`));
app.listen(PORT, () => {
  console.log('Express listening on port', PORT);
});