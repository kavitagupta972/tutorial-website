const mongoose = require('mongoose');

const schema = mongoose.Schema;

const tutorialSchema = new schema({
    title:{type: String, required: true},
    description:{type: String, required: false},
    published:{type : Boolean, required : false},
});

const Tutorial = mongoose.model('tutorials', tutorialSchema);
// mongoose.model("Model", tutorialSchema, "tutorial")

module.exports = Tutorial;
