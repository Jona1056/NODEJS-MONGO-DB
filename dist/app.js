"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = require("express-handlebars");

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

//para crear url
//para crear plantilla html
//mandamos a llamar las rutas del index.routers
//para crear url
var app = (0, _express["default"])(); //declaramos la constante express

app.set("views", _path["default"].join(__dirname, "views")); // mandamos a llamar la carpeta views

var exphbs = (0, _expressHandlebars.create)({
  //comenzamos a crear el diseño
  extname: ".hbs",
  //la extension
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  // esto significa la ubicacion donde esta el archivo
  defaultLayout: "main" // y aqui como se llama el archvo

});
app.engine(".hbs", exphbs.engine); //aqui declaramos el engine

app.set("view engine", ".hbs"); // y esto lo necesitamos para el generador y el interpretadors
//midelwares

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
})); //routes

app.use(_index["default"]); //static files

app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
var _default = app;
exports["default"] = _default;