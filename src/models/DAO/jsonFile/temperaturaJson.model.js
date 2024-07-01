import fs from "fs";

class TemperaturaModelFs {
  constructor() {
    this.temperatura = "temperatura.json";
  }

  getTemperaturas = async () => {
    const data = JSON.parse(await fs.promises.readFile(this.temperatura, "utf-8"));
    return data;
  };

  getTemperaturaPorSonda = async (idSonda) => {
    if (idSonda < 1 || idSonda > 5) {
      throw new Error('Número de sonda incorrecto');
    }
    const data = JSON.parse(await fs.promises.readFile(this.temperatura, "utf-8"));
    const temperaturas = data.filter(temp => temp.id == idSonda);
    return temperaturas;
  };

  postTemperatura = async (temp) => {
    if (temp.id < 1 || temp.id > 5 || temp.temperatura < -20 || temp.temperatura > 100) {
      throw new Error('datos no válidos');
    }

    temp.fechaHora = new Date().toISOString();

    const data = JSON.parse(await fs.promises.readFile(this.temperatura, "utf-8"));
    data.push(temp);

    await fs.promises.writeFile(this.temperatura, JSON.stringify(data, null, 2)); // null, 2 para un JSON más legible
    return temp;
  };

  getEstadisticas = async () => {
    const data = JSON.parse(await fs.promises.readFile(this.temperatura, "utf-8"));
    const estadisticas = {
      cantidadTotalMuestras: data.length,
      temperaturaSondas: {}
    };

    for (var i = 1; i <= 5; i++) {
      const muestras = data.filter(temp => temp.id === i);
      const cantidad = muestras.length;
      const promedio = cantidad ? muestras.reduce((acc, temp) => acc + temp.temperatura, 0) / cantidad : 0;

      estadisticas.temperaturaSondas[i] = { cantidad, promedio };
    }

    return { estadisticas };
  } 
}

export default TemperaturaModelFs;
