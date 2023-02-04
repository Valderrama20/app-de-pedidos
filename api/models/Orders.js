const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ordersSchema = new Schema({
    idUser: String,
    customerName: String,
    dateOfDelivery: String,
    products: Object,
    quantityOfProducts: Object,
    productColors: Object,
    theme: String,
    Shipment: Object,
    orderTotal: String,
    pay: String,
    lack: String
})

const Orders = mongoose.model('Orders', ordersSchema)

module.exports = Orders