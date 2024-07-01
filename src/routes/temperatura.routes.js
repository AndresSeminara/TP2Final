import express from 'express'
import TemperaturaController from '../controller/temperatura.controller.js'

class Router {
    constructor(){
        this.router = express.Router();
        this.controller = new TemperaturaController;
    }
    start () {
        this.router.get("/temperatura", this.controller.getTemperaturas);
        this.router.get("/temperatura/:id", this.controller.getTemperaturaPorSonda);
        this.router.post("/temperatura", this.controller.postTemperatura);
        this.router.get("/estadisticas", this.controller.getEstadisticas);
        return this.router
    }

}

export default Router