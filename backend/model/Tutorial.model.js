const mongoose = require('mongoose');

const schema = mongoose.Schema;

const tutorialSchema = new schema({
    title:{type: String, required: true},
    description:{type: String, required: false},
    published:{type : Boolean, required : false},
});

const Tutorial = mongoose.model('tutorials', tutorialSchema);
//other options to create model in case your collection name is not plural
// const Tutorial = mongoose.model('mytutorial', tutorialSchema, 'mytutorial');
// mongoose.model("Model", tutorialSchema, "tutorial")

module.exports = Tutorial;
