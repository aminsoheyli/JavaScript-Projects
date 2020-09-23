const Joi = require('joi');
const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

const Genre = mongoose.model('Genre', genreSchema);

function validateGenre(genre) {
    console.log(genre);

    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(genre, schema);
    const error = result.error;
    return error;
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;
