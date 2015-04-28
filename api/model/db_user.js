var faux_db = require('./faux_db');

exports.findByUsername = function(username, fn) {
  for (var i = 0, len = faux_db.users.length; i < len; i++) {
    var user = faux_db.users[i];
    if (user.username === username) {
      return fn(null, user);
    }
  }
  return fn(null, null);
};

