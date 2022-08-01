const express = require('express');
const customerRouter = express.Router();

const customerController = require('../controllers/customer-controller');
const bodyValidation = require('../middlewares/body-validation');
const idValidator = require('../middlewares/idValidator');
const customerValidator = require('../validators/customer-validator');


customerRouter.route('/')
    .get(customerController.getAll)
    .post(customerController.create);
customerRouter.route('/:id')
    .get(idValidator(), customerController.getById)
    .put(idValidator(), bodyValidation(customerValidator), customerController.update)
    .delete(idValidator(), customerController.delete);

module.exports = customerRouter;
