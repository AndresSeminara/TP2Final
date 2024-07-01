class TemperaturaModelMemory {
    constructor() {
      this.temperaturas = [
        {
          "id": 1,
          "temperatura": 22,
          "fechaHora": "2024-07-01T23:02:07.024Z"
        },
        {
            "id": 2,
            "temperatura": 54,
            "fechaHora": "2024-07-01T23:02:26.877Z"
        },
        {
            "id": 3,
            "temperatura": 76,
            "fechaHora": "2024-07-01T23:02:34.213Z"
        },
        {
            "id": 4,
            "temperatura": 12,
            "fechaHora": "2024-07-01T23:02:39.363Z"
        },
        {
            "id": 5,
            "temperatura": 17,
            "fechaHora": "2024-07-01T23:02:42.957Z"
        }
      ];
    }
    
    getTemperaturas = async () => {
      return this.temperaturas;
    };

    getTemperaturaPorSonda = async (idSonda) => {
      if (idSonda < 1 || idSonda > 5) {
        throw new Error('Número de sonda incorrecto');
      }

      const temperaturas = await this.temperaturas.filter(data => data.id == idSonda);
      return temperaturas;
    };

    postTemperatura = async (data) => {
      if (data.id < 1 || data.id > 5 || data.temperatura < -20 || data.temperatura > 100) {
        throw new Error('datos no válidos');
      }
  
      data.fechaHora = new Date().toISOString();
      this.temperaturas.push(data);
      return data;
    };

    getEstadisticas = async () => {
      const estadisticas = {
        cantidadTotalMuestras: this.temperaturas.length,
        temperaturaSondas: {}
      };
  
      for (let i = 1; i <= 5; i++) {
        const muestras = this.temperaturas.filter(temp => temp.id === i);
        const cantidad = muestras.length;
        const promedio = cantidad ? muestras.reduce((acc, temp) => acc + temp.temperatura, 0) / cantidad : 0;
  
        estadisticas.temperaturaSondas[i] = { cantidad, promedio };
      }
  
      return { estadisticas };
    }
  }
  
  export default TemperaturaModelMemory;