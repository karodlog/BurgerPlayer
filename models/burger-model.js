const { Schema, model } = require('mongoose');
const { boolean } = require('yup');


const burgerSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    icon:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true 
    },
    ingredients:{
        type:[String],
        required: true,
    },
    allergen:{
        type: Boolean,
        required: true
    },
    listAllergen: {
        type: [String],
        required: true
    },
    price:{
        type: Number
        },
        
},{
    collection: 'Burger',
    timestamps: true
});


const Burger = model('Burger', burgerSchema);

module.exports = Burger;