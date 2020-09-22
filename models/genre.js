const Joi = require('joi');
const mongoose = require('mongoose');

const Genre = mongoose.model('Genre', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));

function validate(genre) {
    console.log(genre);

    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(genre, schema);
    const error = result.error;
    return error;
}

exports.Genre = Genre;
exports.validate = validate;