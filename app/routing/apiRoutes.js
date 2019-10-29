//what data the user sees and what is posted from the server
let friendsData = require('../data/friends.js');

module.exports = function (app) {

  app.get('/api/friends', function (req, res) {
    return res.json(friendsData)
  });

  app.post('/api/friends', function(req, res) {
    friendsData.push(req.body);
    res.json();
  });

}