const yup = require('yup');
const customerValidator = yup.object({
    firstname: yup.string().trim().required().max(150).min(2),
    lastname: yup.string().trim().required().max(150).min(2),
    email: yup.string().trim().email().required().max(250),
    adress:{
        street: yup.string().required().trim().max(255),
        numberHouse: yup.number().required().positive().integer(),
        boxe: yup.string().trim(),
        city: yup.string().required().trim().max(150),
        postalCode: yup.number().required().positive().integer(),
    },
    phoneNumber: yup.string().required().trim()
});

module.exports = customerValidator;