const customerRouter = require('./customer-router');
const burgerRouter = require('./burger-router');
const orderRouter = require('./order-router');

//le router "parent"
const router = require('express').Router();



//les différentes routes
router.use('/customer', customerRouter)
router.use('/burger', burgerRouter);
router.use('/order', orderRouter);



module.exports = router