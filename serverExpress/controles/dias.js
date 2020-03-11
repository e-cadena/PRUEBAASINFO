;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])





let ingresarDia = (req,res) => {
    let campos = req.body.campos
    let tabla = req.body.tabla
    console.log(campos.primerNombre)
    console.log(tabla)
    db(tabla).insert(campos)
    .then(registro => {
        return res.status(200).json({
            mensaje: "el registro due guardado"
        })
    })
    .catch(error => {
        return res.status(404).json({
            mensaje: error
        })
    })
}


let modificarDia = (req, res) => {
    let campos = req.body.campos
    let tabla = req.body.tabla
    let condicion = req.body.condicion
    db(tabla).where(condicion[0], condicion[1], condicion[2]).update(campos)
    .then(registro => {
        return res.status(200).json({
            mensaje: "El registro fue modificado"
        })
        
    })
    .catch(error => {
        return res.status(404).json({
            mensaje: error
        })
    })
}


module.exports = {
   ingresarDia,
   modificarDia
}