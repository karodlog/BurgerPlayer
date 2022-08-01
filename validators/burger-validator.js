const yup = require('yup');

const burgerValidator = yup.object({
    name: yup.string().required().trim().max(50),
    icon: yup.string().required().trim(),
    description: yup.string().required().trim().max(300),
    ingredients: yup.string().required().trim().max(500),
    price: yup.number().required().max(2)

});

module.exports = burgerValidator;