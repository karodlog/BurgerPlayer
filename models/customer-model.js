const { Schema, model } = require('mongoose');


const customerSchema = new Schema({
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
    phoneNumber:{
        type: String,
        required: true,
        trim: true
    }
},{
    collection: 'Customer',
    timestamps: true
});


const Customer = model('Customer', customerSchema);

module.exports = Customer;