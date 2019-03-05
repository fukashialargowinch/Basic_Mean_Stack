var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Age: Number,
Password: String,
// rePassword: String

});

module.exports = mongoose.model('Users', userSchema);
