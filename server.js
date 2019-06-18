const express = require('express');
const mongoose = require('mongoose')

const auth = require('./routes/api/user');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const bodyParser = require('body-parser');



const app = express();

//body-prser middleware

app.use(bodyParser.urlencoded({encoded : false}));
app.use(bodyParser.json());
//DB config


const db = require('./config/keys').mongoURI;

//connect tto mongo db using mongoose

mongoose
    .connect(db, { 
        uri_decode_auth: true,
        useNewUrlParser: true } )
    .then(() => console.log('MongoDB connected')) //Promise in js
    .catch(err => console.log(err));


app.get('/', (req,res) => res.json({a : 'Hello!!ß'}));
 
//use routes

app.use('/api/auth',auth);
app.use('/api/profile',profile);
app.use('/api/posts',posts);



const port = process.env.PORT || 5000;

 app.listen(port, () => console.log('Server running on port' +port));

 //module.exports = app;