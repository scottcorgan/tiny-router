var router = require('../index.js');
var test = require('tape');

// var route = router();
// var users = route('/users')
//   .templates({ // Templates can be passed a callback too which executes code
//     '#wrapper': someElement
//   })
//   .after(function (templates, next) {
    
//   });
//   .before(function (templates, next) {
    
//   });

// var usersFriends = users
//   .route('/friends')
//     .templates({
//       '#child-wrapper': childElement
//     });

test('creates a route with a given path', function (t) {
  var route = router('my-routes');
  var users = route('/users');
  
  t.ok(route.router._routes['/users'] instanceof router.Route, 'instantiated route');
  t.equal(users.path, '/users', 'sets the route path');
  t.end();
});

test('creates a nested route with path', function (t) {
  var route = router('my-routes');
  var users = route('/users');
  var friends = users.route('/friends');
  
  t.ok(route.router._routes['/users/friends'] instanceof router.Route, 'instantiated nested route');
  t.equal(friends.path, '/users/friends', 'sets the nested path');
  t.end();
});