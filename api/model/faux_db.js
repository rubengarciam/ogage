var events = exports.events = [];

events.push({ name: 'city2surf', id: 0 });
events.push({ name: 'dance party', id: 1 });
events.push({ name: 'pizza and beer', id: 2 });
events.push({ name: 'stuff', id: 3 });

var users = exports.users = [];

users.push({ username: 'boris', password: 'boris',  events: [events[0], events[1], events[2]], id: 0  });
users.push({ username: 'ash', password: 'ash', events: [events[3]], id: 1 });
users.push({ username: 'rubs', password: 'rubs', events: [], id: 2 });