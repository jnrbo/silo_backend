let mongoose = require('mongoose');

let SiloSchema = new mongoose.Schema({
    volume: Number,
    humidity: Number,
    temperature: Number,
    date: Date,
});

module.exports = mongoose.model('Silo', SiloSchema);
