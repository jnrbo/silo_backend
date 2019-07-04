const Occurrence = require('../model/occurrence');


class WheatherService {

    static generate(occurrence, callback) {
        new Wheather({
            volume: occurrence.volume,
            umidity: occurrence.humity,
            tempeture: occurrence.tempeture,
            date: occurrence.date,
            approved: false,
        }).save(callback);
    }


    static show(wheatherId, callback) {
        Wheather.findById(occurrenceId, callback);
    }

    static list(approved, callback) {
        Wheather.find({ approved: approved }, callback);
    }
}


module.exports = WheatherService;
