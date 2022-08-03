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
            select:{firstname:1, email:1, adress:1, _id:0},
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
            select: {firstname:1, email:1, adress:1, _id:0}
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
        const id = req.params.id;
        const {choix1, choix2, choix3, choix4, choix5,customerId,status, customerNotes} = req.body;
        const orderToUpdated = await Order.findByIdAndUpdate(id,{
            choix1,
            choix2,
            choix3,
            choix4,
            choix5,
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