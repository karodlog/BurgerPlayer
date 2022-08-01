const customerRouter = require('./customer-router');
const burgerRouter = require('./burger-router');

const router = require('express').Router();



//les différentes routes
router.use('/customer', customerRouter)
router.use('/burger', burgerRouter);
router.use('/order', (req, res) => res.sendStatus(501));



module.exports = router