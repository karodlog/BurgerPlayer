const Customer = require('../models/customer-model');

const customerController = {
    getAll: async (req, res)=>{
        const customers = await Customer.find();
        res.status(200).json(customers);
    },
    getById: async (req, res)=>{
        const id = req.params.id;
        const customer = await Customer.findById(id);
        if(customer){
            res.status(200).json(customer);
        }
        else{
            return res.sendStatus(404);
        }
    },
    create: async (req, res)=>{
        const customerToAdd = Customer(req.body);
        await customerToAdd.save();
        res.status(200).json(customerToAdd);
    },
    update: async (req, res)=>{
        const id = req.params.id;

        const customerUpdated = await Customer.findByIdAndUpdate(id,{
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            adress:{
                street: req.body.adress.street,
                numberHouse: req.body.adress.numberHouse,
                boxe: req.body.adress.boxe,
                city: req.body.adress.city,
                postalCode: req.body.adress.postalCode,
            },
            phoneNumber: req.body.phoneNumber
        }, {returnDocument: 'after'});

        if(customerUpdated){
            res.status(200).json(customerUpdated)
        }
        else{
            return res.send('merde')
        }
    },
    delete: async (req, res)=>{
        const id = req.params.id;
        console.log(id);
        const customerToDelete = await Customer.findByIdAndDelete(id);

        if(!customerToDelete){
            return req.send(`Pas trouvé l'id à effacer`)
        }
        res.sendStatus(200);
    }
}


module.exports = customerController;