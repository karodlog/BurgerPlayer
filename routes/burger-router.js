const express = require('express');
const burgerController = require('../controllers/burger-controller');
const bodyValidation = require('../middlewares/body-validation');
const idValidator = require('../middlewares/idValidator');
const burgerValidator = require('../validators/burger-validator');
const burgerRouter = express.Router();


burgerRouter.route('/')
    .get(burgerController.getAll)
    .post(burgerController.create)
burgerRouter.route('/:id')
    .get(idValidator(), burgerController.getById)
    .put(idValidator(),  burgerController.update)
    .delete(idValidator(), burgerController.delete);

module.exports = burgerRouter;
