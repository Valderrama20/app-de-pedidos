const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ordersSchema = new Schema({
    logo : String,
    algodon: Boolean,
    pochoclos: Boolean,
    paletas: Boolean,
    envio: String,
    cliente: String,
    fecha: Number,
    total:  String,
    abono: String,
    resta: String,
    detalles: String,
})

const Orders = mongoose.model('Orders', ordersSchema)

module.exports = Orders