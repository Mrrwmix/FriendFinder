const path = require('path');

module.exports = app => {
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });
  app.use(express.static('public/style'));
};
