//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://anjardewantara:UiUqwraqjDycIdlw@be-project.v79hqx9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;