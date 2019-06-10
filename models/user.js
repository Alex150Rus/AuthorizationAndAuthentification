const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, default: 'Ivan', required: true},
  username: {type: String, required: true},
  age: {type: Number},
  password: {type: String, required : true}, //Todo - шифрование пароля с помощью salt или digets,
  //соль также должна храниться в базе вместе с паролем для шифрования в Node.js
  //имеется встроенная библиотека crypto - в большинстве случаев её хватитю Использовать Hmac
})

module.exports = mongoose.model('User', userSchema, 'user');