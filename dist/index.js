"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

var _config = require("./config");

//importamos la variable app desde la clase app
_app["default"].listen(_config.PORT);

console.log("Server on port ", _config.PORT); //ejecutamos el servidor