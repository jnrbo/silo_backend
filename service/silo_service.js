const Silo = require('../model/silo');


class SiloService {

    static save(volume, humidity, temperature, callback) {
        new Silo({
            volume: volume,
            humidity: humidity,
            temperature: temperature,
            date: new Date()
        }).save(callback);
    }

    static list(callback) {
        Silo.find({}, callback);
    }
}


module.exports = SiloService;
