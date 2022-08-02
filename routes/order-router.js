const orderRouter = require('express').Router();
const orderController = require('../controllers/order-controller');

orderRouter.route('/')
    .get(orderController.getAll)
    .post(orderController.create)
orderRouter.route('/:id')
    .get(orderController.getById)
    .put((req, res)=> res.sendStatus(501))
    .delete((req, res)=> res.sendStatus(501))
orderRouter.route('burger/:id')
    .get((req, res)=> res.sendStatus(501))
orderRouter.route('customer/:id')
    .get((req, res)=> res.sendStatus(501))


module.exports = orderRouter;