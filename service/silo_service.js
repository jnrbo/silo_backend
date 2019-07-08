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
        // pega os 30 ultimos
        Silo.find({}).
        limit(30).
        sort({ date: -1 }).
        exec(callback);
    }
}


module.exports = SiloService;
