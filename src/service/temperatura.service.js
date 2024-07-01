import config from "../../config.js"
import ModelFactory from "../models/DAO/Fatory.js";


class TemperaturaServices {
    
    constructor(){
        this.model = ModelFactory.get(config.PERSISTENCE);
    }
    
    getTemperaturas = async () => {
        const temperaturas = await this.model.getTemperaturas();
        return temperaturas;
    };

    getTemperaturaPorSonda = async (idsonda) => {
        return await this.model.getTemperaturaPorSonda(idsonda);
    };

    postTemperatura = async (temperatura) => {
        return await this.model.postTemperatura(temperatura);
    }

    getEstadisticas = async () => {
        const estadisticas = await this.model.getEstadisticas();
        return estadisticas;
    };
}

export default TemperaturaServices;