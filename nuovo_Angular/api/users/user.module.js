const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  nome : String,
  congnome : String,
  mail : String
},{
  versionKey : false
})

const User = mongoose.model('user', userSchema);

module.exports = User;
