var routeFactory = require('./route_factory');

var Route = module.exports = function (path, router) {
  this.router = router;
  this.path = path;
};

Route.prototype.route = function (path) {
  var nestedPath = this.path + path;
  return routeFactory(this.router)(nestedPath);
};