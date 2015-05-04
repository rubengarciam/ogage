//placeholder database

var events = exports.events = [];

events.push({ id: 0, name: 'city2surf', going: '5', maybe: '12' });
events.push({ id: 1, name: 'dance party', going: '3', maybe: '4' });
events.push({ id: 2, name: 'pizza and beer', going: '90', maybe: '120'});
events.push({ id: 3, name: 'stuff', going: '15', maybe: '42'});

var users = exports.users = [];

users.push({ id: 0, username: 'boris', password: 'boris',  events: [events[0], events[1], events[2]] });
users.push({ id: 1, username: 'ash', password: 'ash', events: [events[3]] });
users.push({ id: 2, username: 'rubs', password: 'rubs', events: [] });