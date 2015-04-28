var events = exports.events = [];

events.push({ id: 0, name: 'city2surf' });
events.push({ id: 1, name: 'dance party' });
events.push({ id: 2, name: 'pizza and beer'});
events.push({ id: 3, name: 'stuff'});

var users = exports.users = [];

users.push({ id: 0, username: 'boris', password: 'boris',  events: [events[0], events[1], events[2]] });
users.push({ id: 1, username: 'ash', password: 'ash', events: [events[3]] });
users.push({ id: 2, username: 'rubs', password: 'rubs', events: [] });