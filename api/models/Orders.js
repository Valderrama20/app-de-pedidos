const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ordersSchema = new Schema({
    logo : String,
    algodon: Boolean,
    pochoclos: Boolean,
    paletas: Boolean,
    envio: String,
    cliente: String,
    fecha: String,
    total:  String,
    abono: String,
    detalles: String,
})

const Orders = mongoose.model('Orders', ordersSchema)

module.exports = Orders