const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const genres = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Horror'},
    {id: 3, name: 'Romance'}
];

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given id was not found');
    res.send(genre);
});

app.delete('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given id was not found.');
    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(genre);
});

function validateGenre(genre) {
    // var err = Joi.string().min(3).required().validate('a'); // ValidationError: "value" length must be at least 3 characters long
    // // console.log(err);
    // const objSchema = {name: Joi.string().min(3).required()};
    //
    // err = Joi.validate({}, objSchema); // ValidationError: child "name" fails because ["name" is required]
    // err = Joi.validate({name: 'a'}, objSchema); // ValidationError: child "name" fails because ["name" length must be at least 3 characters long]
    // console.log(err);

    console.log(genre)


    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(genre, schema);
    const error = result.error;
    // console.log(result);
    return error;
}

app.post('/api/genres', (req, res) => {
    const error = validateGenre(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genres[genres.length - 1].id + 1,
        name: req.body.name
    };

    genres.push(genre);
    res.send(genre);
});

app.put('/api/genres/:id',(req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given id was not found.');

    const error = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Listening on port: ' + port + '...'));