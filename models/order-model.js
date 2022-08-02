const { Schema, model, Types } = require('mongoose');
const Burger = require('./burger-model');
const Customer = require('./customer-model');


const orderSchema = new Schema({
    firstname:{
        type: String,
        required: true,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    adress:{
        street:{
            type: String,
            required: true,
            trim: true
        },
        numberHouse:{
            type: Number,
            required: true,
            trim: true
        },
        boxe:{
            type: String,
            trim: true
        },
        city:{
            type: String,
            required: true,
            trim: true
        },
        postalCode:{
            type: Number,
        }
    },
    status:{
        type: String,
        enum: ['Created', 'Pending', 'Done'],
        default: 'Created',
        required: true,
        trim: true
    }
},{
    collection: 'Order',
    timestamps: true
});


const Order = model('Order', orderSchema);

module.exports = Order;