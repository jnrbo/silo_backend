var express = require('express'); // Biblioteca usada para fazer get/post
var SiloService = require('../service/silo_service');

const app = express.Router();

app.post('/', (req, res) => {
    var volume = req.body.volume;
    var humidity = req.body.humidity;
    var temperature = req.body.temperature;

    SiloService.save(volume, humidity, temperature, (err, saved) => {
        if (err) return res.json({ success: false, error: err });

        res.json({ success: true, silo: saved })
    });
});


app.get('/', (req, res) => {
   SiloService.list((err, list) => {
       if (err) return res.json({ success: false, error: err });

       res.json({ success: true, silos: list })
   });
});


module.exports = app;
