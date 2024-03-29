const express = require('express');
const path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
