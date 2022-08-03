const orderRouter = require('express').Router();
const orderController = require('../controllers/order-controller');

orderRouter.route('/')
    .get(orderController.getAll)
    .post(orderController.create)
orderRouter.route('/:id')
    .get(orderController.getById)
    .put(orderController.update)
    .delete(orderController.delete)
orderRouter.route('/burger/:id')
    .get(orderController.getByBurger)
orderRouter.route('/customer/:id')
    .get(orderController.getByCustomer)


module.exports = orderRouter;