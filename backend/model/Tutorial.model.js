const mongoose = require('mongoose');

const schema = mongoose.Schema;

const tutorialSchema = new schema({
    title:{type: String, required: true},
    description:{type: String, required: false},
    published:{type : boolean, required : false},
});

const Tutorial = mongoose.model('tutorials', employeeSchema);

module.exports = Tutorial;
