const express = require('express'); // Biblioteca usada para fazer get/post
const OccurrenceService = require('../service/wheather_services');

const app = express.Router();


app.post('/register', (req, res) => {
    let occurrence = {
        volume:     req.body.volume,
        tempeture:  req.body.tempeture,
        date:       req.body.date,
    };

    WheatherService.generate(occurrence, (err, occ) => {
        if (err) return res.json({ success: false, error: err });

        res.json({ success: true, occurrence: occ })
    });
});

app.get('/show/:id', (req, res) => {
    WheatherService.show((err, occurrence) => {
        if (err) return res.json({ success: false, error: err });

        res.json({ success: true, occurrence: occurrence })
    });
});


module.exports = app;
