const Order = require('../models/order-model');

const orderController = {
    getAll: async (req, res)=>{

        // pour filter par le statut de la commande
        let filterStatus;
        const status = req.params.status;
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
            path: 'burgerId',
            select: {quantity:0},
            strictPopulate: false,
        }])
        .populate([{
            path: 'customerId',
            select:{firstname:1, email:1, _id:0},
        }]);
        const count = await Order.countDocuments();
        const data = {'order': orders, 'count': count}
        res.status(200).json(data)

    },

    getById: async (req, res)=>{
        const id = req.params.id;
        const orders = await Order.findById(id)
        .populate([{
            path: 'burgerId',
            select: {name: 1, icon: 1, price: 1, _id:0},
            model: 'Burger',
            strictPopulate: false,
        }])
        .populate([{
            path: 'customerId',
            select: {adress:0, _id:0,}
        }]);
        if(!orders){
            return res.sendStatus(404);
        }
        res.status(200).json(orders)

    },

    create: async (req, res)=>{
        const orderToAdd = Order(req.body);
        await orderToAdd.save();
        res.status(200).json(orderToAdd);
    },

    update: async (req, res)=>{

    },

    delete: async (req, res)=>{

    },
}


module.exports = orderController;