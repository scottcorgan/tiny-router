var Route = require('./route');

var routeFactory = module.exports = function (router) {
  var currentRoute = function (path) {
    var route = router._routes[path] = new Route(path, router);
    return route;
  };
  
  currentRoute.router = router;
  
  return currentRoute;
};