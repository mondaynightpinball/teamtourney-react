'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/dist`));

app.listen(PORT, function() {
  console.log('server up:', PORT);
});
