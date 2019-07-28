var friends = require('../data/friends');

module.exports = app => {
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });
  app.post('/api/friends', function(req, res) {
    if (/(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/.test(req.body.photo)) {
      friends.push(req.body);
    }
    res.send(friends);
  });
};
