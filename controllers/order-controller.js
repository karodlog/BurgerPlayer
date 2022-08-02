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
        .populate({
            path: 'burgerId',
            select: {name: 1, icon: 1, price: 1}
        })
        .populate({
            path: 'customerId',
        });
        const count = await Order.countDocuments();
        const data = {'order': orders, 'count': count}
        res.status(200).json(data)

    },
    getById: async (req, res)=>{

    },
    create: async (req, res)=>{

    },
    update: async (req, res)=>{

    },
    delete: async (req, res)=>{

    },
}


module.exports = orderController;