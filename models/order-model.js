const { Schema, model, Types } = require('mongoose');
const Burger = require('./burger-model');
const Customer = require('./customer-model');


const orderSchema = new Schema({
    burgerId:{
        type: Types.ObjectId,
        ref: Burger,
        required: true
    },
    customerId:{
        type: Types.ObjectId,
        ref: Customer,
        required: true
    },
    status:{
        type: String,
        enum: ['Created', 'Pending', 'Done'],
        default: 'Created',
        required: true,
        trim: true
    },
    customerNotes:{
        type: String,
        required: false
    },
},{
    collection: 'Order',
    timestamps: true
});


const Order = model('Order', orderSchema);

module.exports = Order;