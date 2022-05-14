import express from "express"; //para crear url
import { create } from "express-handlebars"; //para crear plantilla html
import indexRoutes from "./routes/index.routes"; //mandamos a llamar las rutas del index.routers
import path from "path"; //para crear url
import morgan from "morgan";

const app = express(); //declaramos la constante express

app.set("views", path.join(__dirname, "views")); // mandamos a llamar la carpeta views

const exphbs = create({
  //comenzamos a crear el diseño
  extname: ".hbs", //la extension
  layoutsDir: path.join(app.get("views"), "layouts"), // esto significa la ubicacion donde esta el archivo
  defaultLayout: "main", // y aqui como se llama el archvo
});

app.engine(".hbs", exphbs.engine); //aqui declaramos el engine
app.set("view engine", ".hbs"); // y esto lo necesitamos para el generador y el interpretadors

//midelwares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//routes

app.use(indexRoutes);

//static files

app.use(express.static(path.join(__dirname, "public")));
export default app;
