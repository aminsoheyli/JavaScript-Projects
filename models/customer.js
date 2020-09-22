const Joi = require('joi');
const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));


function validateCustomerOnUpdate(customer) {
    const schema = {
        name: Joi.string().min(5).max(50),
        phone: Joi.string().min(5).max(50),
        isGold: Joi.boolean()
    };
    const result = Joi.validate(customer, schema);
    const error = result.error;
    return error;
}

function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean()
    };
    const result = Joi.validate(customer, schema);
    const error = result.error;
    return error;
}

exports.Customer = Customer;
exports.validateOnCreate = validateCustomer;
exports.validateOnUpdate = validateCustomerOnUpdate;
