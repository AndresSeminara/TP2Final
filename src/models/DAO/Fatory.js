import TemperaturaModelFs from "./jsonFile/temperaturaJson.model.js";
import TemperaturaModelMemory from "./memory/temperaturaMemory.model.js";

class ModelFactory{

    static get(type){
        //me permite evaluar distintos casos de uso
        switch (type) {
            case 'MEM':
                console.log('Persistiendo en la memoria del servidor!')
                return new TemperaturaModelMemory();
            case 'FS':
                console.log('Persistiendo en la memoria de Filesystem!')
                return new TemperaturaModelFs();
            default:
                console.log('Persistiendo en la memoria default!')
                return new TemperaturaModelMemory();
                break;
        }
    }

}

export default ModelFactory