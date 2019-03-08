require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



// GET
app.get('/user', (req, res) => {
    res.json('get User');
})

// POST is use to create new registers
app.post('/user', (req, res) => {

    let body = req.body

    // Using http status code
    if (body.name === undefined) {
        res.status(400).json({
            ok: false,
            message: 'The name is require'
        });
    } else {
        res.json({
            person: body
        });
    }
})

// PUT is use to update registers
app.put('/user/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id
    });
})

// DELETE
app.delete('/user', (req, res) => {
    res.json('delete User');
})



app.listen(process.env.PORT, () => {
    console.log('Listening to port: ', process.env.PORT);
})