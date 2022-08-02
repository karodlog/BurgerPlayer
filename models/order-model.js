const { Schema, model, Types } = require('mongoose');
const Burger = require('./burger-model');
const Customer = require('./customer-model');


const orderSchema = new Schema({
    choix1:{
        burgerId:{
            type: Types.ObjectId,
            ref: Burger,
            required: false,
        },
        quantity:{
            type: Number,
            required: false
        }   
    },
    choix2:{
        burgerId:{
            type: Types.ObjectId,
            ref: Burger,
            required: false,

        },
        quantity:{
            type: Number,
            required: false
        }   
    },
    choix3:{
        burgerId:{
            type: Types.ObjectId,
            ref: Burger,
            required: false,

        },
        quantity:{
            type: Number,
            required: false
        }   
    },
    choix4:{
        burgerId:{
            type: Types.ObjectId,
            ref: Burger,
            required: false,

        },
        quantity:{
            type: Number,
            required: false
        }   
    },
    choix5:{
        burgerId:{
            type: Types.ObjectId,
            ref: Burger,
            required: false,

        },
        quantity:{
            type: Number,
            required: false
        }   
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