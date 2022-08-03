const orderRouter = require('express').Router();
const orderController = require('../controllers/order-controller');
const idValidator = require('../middlewares/idValidator');

orderRouter.route('/')
    .get(orderController.getAll)
    .post(orderController.create)
orderRouter.route('/:id')
    .get(idValidator(), orderController.getById)
    .put(idValidator(), orderController.update)
    .delete(idValidator(), orderController.delete)
orderRouter.route('/burger/:id')
    .get(orderController.getByBurger)
orderRouter.route('/customer/:id')
    .get(orderController.getByCustomer)


module.exports = orderRouter;