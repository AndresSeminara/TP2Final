import express from "express";
import Router from "./src/routes/temperatura.routes.js";
import config from "./config.js"


const app = express();
const PORT = config.PORT;

app.use(express.json()); //traer info del req.body
app.use(express.urlencoded({ extended: true })); //req.params

app.use("/", new Router().start());

app.listen(PORT, () => console.log(`Server listening on: ${PORT}`));
app.on("error", (error) => console.log(`ERROR: ${error}`));