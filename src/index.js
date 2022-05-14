import app from "./app"; //importamos la variable app desde la clase app
import "./database";
import {PORT} from "./config"

app.listen(PORT);
console.log("Server on port ", PORT); //ejecutamos el servidor
