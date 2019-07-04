var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    registry: String,
    password: String,
});

module.exports = mongoose.model('User', UserSchema);
