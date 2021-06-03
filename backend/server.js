const express = require('express');
const fs = require('fs');
const app = express();
const cors =  require('cors');
const mongoose = require('mongoose');
const employee = require('./model/Employee.model');
const DB_URI = 'mongodb+srv://root:root@cluster0.qevdm.mongodb.net/employee-details';

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
    res.send("listening to port 3000 .... ");
})

app.get('/employee', (req, res) => {

    employee.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' +err));

  })

app.listen(3000);