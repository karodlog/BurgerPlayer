const Order = require('../models/order-model');

const orderController = {
    getAll: async (req, res)=>{

        // pour filter par le statut de la commande
        let filterStatus;
        const status = req.query.status;
        if(status){
            if(Array.isArray(status)){
                filterStatus = {status: {$in:status}}
            }
            else{
                filterStatus = {status: status}
            }
        }
        else{
            filterStatus = {}
        }

        const orders = await Order.find(filterStatus)
        .populate([{
            path: 'choix1.burgerId',
            select: {name:1, icon:1, price: 1, _id:0},
            strictPopulate: false,
        }])
        .populate([{
            path: 'choix2.burgerId',
            select: {name:1, icon:1, price: 1, _id:0},
            strictPopulate: false,
        }])
        .populate([{
            path: 'choix3.burgerId',
            select: {name:1, icon:1, price: 1, _id:0},
            strictPopulate: false,
        }])
        .populate([{
            path: 'choix4.burgerId',
            select: {name:1, icon:1, price: 1, _id:0},
            strictPopulate: false,
        }])
        .populate([{
            path: 'choix5.burgerId',
            select: {name:1, icon:1, price: 1, _id:0},
            strictPopulate: false,
        }])
        .populate([{
            path: 'customerId',
            select:{firstname:1, email:1, adress:1, _id:1},
        }]);
        const count = await Order.countDocuments();
        const data = {'order': orders, 'count': count}
        res.status(200).json(data)

    },

    getById: async (req, res)=>{
        const id = req.params.id;
        const orders = await Order.findById(id)
        .populate([{
            path: 'choix1.burgerId',
            select: {name: 1, icon: 1, price: 1, _id:0},
            strictPopulate: false,
        }])
        .populate([{
            path: 'choix2.burgerId',
            select: {name: 1, icon: 1, price: 1, _id:0},
            strictPopulate: false,
        }])
        .populate([{
            path: 'choix3.burgerId',
            select: {name: 1, icon: 1, price: 1, _id:0},
            strictPopulate: false,
        }])
        .populate([{
            path: 'choix4.burgerId',
            select: {name: 1, icon: 1, price: 1, _id:0},
            strictPopulate: false,
        }])
        .populate([{
            path: 'choix5.burgerId',
            select: {name: 1, icon: 1, price: 1, _id:0},
            strictPopulate: false,
        }])
        .populate([{
            path: 'customerId',
            select: {firstname:1, email:1, adress:1, _id:1}
        }]);
        if(!orders){
            return res.sendStatus(404);
        }
        res.status(200).json(orders)

    },


    // recherche par l'ID du customer
    getByCustomer: async (req, res)=>{
        const idCustomer = req.params.id;

        // pour filter par le statut de la commande
        let filterStatus;
        const status = req.query.status;
        if(status){
            if(Array.isArray(status)){
                filterStatus = {status: {$in:status}}
            }
            else{
                filterStatus = {status: status}
            }
        }
        else{
            filterStatus = {}
        }
        
        const customerFilter = {customerId : idCustomer};
        const orders = await Order.find({$and: [customerFilter, filterStatus]})
            .populate({
                path: 'customerId',
                select: {firstname:1, lastname:1}
            })
            .populate([{
                path: 'choix1.burgerId',
                select: {name: 1, icon: 1, price: 1, _id:0},
                strictPopulate: false,
            }])
            .populate([{
                path: 'choix2.burgerId',
                select: {name: 1, icon: 1, price: 1, _id:0},
                strictPopulate: false,
            }])
            .populate([{
                path: 'choix3.burgerId',
                select: {name: 1, icon: 1, price: 1, _id:0},
                strictPopulate: false,
            }])
            .populate([{
                path: 'choix4.burgerId',
                select: {name: 1, icon: 1, price: 1, _id:0},
                strictPopulate: false,
            }])
            .populate([{
                path: 'choix5.burgerId',
                select: {name: 1, icon: 1, price: 1, _id:0},
                strictPopulate: false,
            }]);
            const count = await Order.countDocuments(customerFilter);
            const data = {'orders': orders, 'count': count}
            res.status(200).json(data);
    },


    // recherche par l'ID du burger
    getByBurger: async (req, res)=>{
        const idBurger = req.params;

        // pour filter par le statut de la commande
        let filterStatus;
        const status = req.query.status;
        if(status){
            if(Array.isArray(status)){
                filterStatus = {status: {$in:status}}
            }
            else{
                filterStatus = {status: status}
            }
        }
        else{
            filterStatus = {}
        }

        const burgerFilter = {burgerId : idBurger};
        const orders = await Order.find({$and: [burgerFilter, filterStatus]})
            .populate({
                path: 'customerId',
                select: {firstname:1, lastname:1}
            })
            .populate([{
                path: 'choix1.burgerId',
                select: {name: 1, icon: 1, price: 1, _id:0},
                strictPopulate: false,
            }])
            .populate([{
                path: 'choix2.burgerId',
                select: {name: 1, icon: 1, price: 1, _id:0},
                strictPopulate: false,
            }])
            .populate([{
                path: 'choix3.burgerId',
                select: {name: 1, icon: 1, price: 1, _id:0},
                strictPopulate: false,
            }])
            .populate([{
                path: 'choix4.burgerId',
                select: {name: 1, icon: 1, price: 1, _id:0},
                strictPopulate: false,
            }])
            .populate([{
                path: 'choix5.burgerId',
                select: {name: 1, icon: 1, price: 1, _id:0},
                strictPopulate: false,
            }]);

            const count = await Order.countDocuments(burgerFilter);
            const data = {'orders': orders, 'count': count}
            res.status(200).json(data);
    },


    create: async (req, res)=>{
        const orderToAdd = Order(req.body);
        await orderToAdd.save();
        res.status(200).json(orderToAdd);
    },

    update: async (req, res)=>{
        const id = req.params.id;
        const {burgerId, quantity,customerId,status, customerNotes} = req.body;
        console.log(req.body.customerId);
        const orderToUpdated = await Order.findByIdAndUpdate(id,{
            burgerId,
            quantity,
            customerId,
            status,
            customerNotes: customerNotes ? customerNotes : null,

        }, {returnDocument: 'after'});
        if(!orderToUpdated){
            return res.sendStatus(404);
        }
        res.sendStatus(204);


    },

    delete: async (req, res)=>{
        const id = req.params.id;
        const orderToDelete = await Order.findByIdAndDelete(id);
        if(!orderToDelete){
            return res.sendStatus(404);
        }
        res.sendStatus(204)

    },
}


module.exports = orderController;