# TP2Final

Para correr la API ejecutar:

- npm install
- npm run watch


En el config se puede modificar "PERSISTENCE" para elegir entre persistencia de datos en memoria "MEM" o en jsonFiles "FS".

Endpoints:
get - temperatura: devuelve todas las temperaturas registradas por todas las sondas
get - temperatura/:id: devuelve todas las temperaturas registradas por la sonda especificada
post - temperatura: permite cargar una termperatura nueva para la sonde especificada
get - estadisticas: devuelve todas las temperaturas registradas por todas las sondas en forma de reporte estadistico