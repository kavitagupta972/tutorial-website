const express = require('express');
const fs = require('fs');
const app = express();
const cors =  require('cors');
const mongoose = require('mongoose');
const tutorials = require('./model/Tutorial.model');
const DB_URI = 'mongodb+srv://root:root@cluster0.qevdm.mongodb.net/tutorial_db';

app.use(cors());
app.use(express.json());

mongoose.connect(DB_URI, 
    {
         useNewUrlParser: true, 
         useUnifiedTopology: true
    });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connection to mongodb is successful');
})

app.get('/', (req, res) => {
    res.send("listening to port 3030 .... ");
})

app.get('/tutorials', (req, res) => {

    tutorials.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' +err));

  })

app.listen(3030);