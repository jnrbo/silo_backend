let mongoose = require('mongoose');

let SiloSchema = new mongoose.Schema({
    volume: Number,
    humity: Number,
    tempeture: Number,
    date: Date,
});

module.exports = mongoose.model('Silo', SiloSchema);
