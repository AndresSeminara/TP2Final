import TemperaturaServices from '../service/temperatura.service.js'

class TemperaturaController{
    
    constructor(){
        this.service = new TemperaturaServices;
    }

    getTemperaturas = async (req, res) => {
        const temperaturas = await this.service.getTemperaturas();
        res.status(200).json(temperaturas);
    }
    
    getTemperaturaPorSonda = async (req, res) => {
        try{
            const { id } = req.params;
            const temperaturasProSonda = await this.service.getTemperaturaPorSonda(id);
            res.status(200).json(temperaturasProSonda);
        }catch (error){
            res.status(error.statusCode || 500).json({ errorMsg: error.message });
        }
    };

    postTemperatura = async (req, res) => {
        const temperaturaNueva = req.body;
        try{
            const temperatura = await this.service.postTemperatura(temperaturaNueva);
            res.status(200).json(temperatura);
        }catch (error) {
            res.status(error.statusCode || 500).json({ errorMsg: error.message });
        }
    };

    getEstadisticas = async (req, res) => {
        try {
            const estadisticas = await this.service.getEstadisticas();
            res.status(200).json(estadisticas);
        } catch (error) {
            res.status(500).json({ errorMsg: error.message });
        }
    }
}

export default TemperaturaController;