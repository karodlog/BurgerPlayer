const Burger = require('../models/burger-model');

const burgerController = {
    getAll: async (req, res)=>{
        const burgers = await Burger.find();
        res.status(200).json(burgers);
    },

    getById: async (req, res)=>{
        const id = req.params.id;
        const burger = await Burger.findById(id);
        if(burger){
            res.status(200).json(burger);
        }
        else{
            return res.sendStatus(400)
        }        
    },

    create: async (req, res)=>{
        const burgerToAdd = Burger(req.body);
        await burgerToAdd.save();
        res.status(200).json(burgerToAdd);
    },

    update: async (req, res)=>{
        const id = req.params.id;
        const burgerToUpdated = await Burger.findByIdAndUpdate(id, {
            name: req.body.name,
            icon: req.body.icon,
            description: req.body.description,
            ingredients: req.body.ingredients,
            price: req.body.price
        }, {returnDocument: 'after'} );

        if(burgerToUpdated){
            res.status(200).json(burgerToUpdated);
        }
        else{
            return res.sendStatus(400);
        }
        

    },
    delete: async (req, res)=>{
        const id = req.params.id;
        const burgerToDelete = await Burger.findByIdAndDelete(id);
        
        if(!burgerToDelete){
            return req.send(`Pas trouvé l'id à effacer`)
        }
        res.sendStatus(200);
    },


    }




module.exports = burgerController;