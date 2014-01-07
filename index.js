var page = require('path');
var dom = require('tiny-dom');

var tinyRouter = function (name) {
  tinyRouter.routers[name] = tinyRouter.routers[name] || new Router(name);
  return tinyRouter.routers[name];
};

tinyRouter.routers = {}

//
var Router = function (name) {
  var router = this;
  
  this.name = name;
  this._routes = {};
  
  return routeFactory(router);
};

//
var routeFactory = function (router) {
  var currentRoute = function (path) {
    var route = router._routes[path] = new Route(path, router);
    return route;
  };
  
  currentRoute.router = router;
  
  return currentRoute;
};

//
var Route = tinyRouter.Route = function (path, router) {
  this.router = router;
  this.path = path;
};

Route.prototype.route = function (path) {
  var nestedPath = this.path + path;
  return routeFactory(this.router)(nestedPath);
};

module.exports = tinyRouter;