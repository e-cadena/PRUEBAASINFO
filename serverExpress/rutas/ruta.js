;
const express = require('express')
let api = express.Router(),
  pruebaControl = require('../controles/prueba'),
  estudiantesControl = require('../controles/estudiantes')

api.get('/prueba', pruebaControl.prueba)
api.post('/leer-tabla', estudiantesControl.leerTabla)
api.post('/leer-tabla-id', estudiantesControl.leerTablaId)
api.post('/ingresar-registro', estudiantesControl.ingresarRegistro)
api.put('/modificar-registro', estudiantesControl.modificarRegistro)

module.exports = api
