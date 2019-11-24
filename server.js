const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv").config();

/* Configurations */
const app = express();
const port = process.env.PORT || 3001;
// const db = require("./config/db");

/* Libraries */
const async = require("async");
const math = require("mathjs");
const moment = require("moment");

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(logger("dev"));
app.use(cors());

/* API */

// Search database for specialists
app.get("/search/:_id?", (req, res) => {
    getHealthCard = (callback) => {
        const { id } = req.query;

        Patient.find({ id }, {
            id: 1
        })
        .then(patient => {
            callback(null, patient);
        })
        .catch(err => {
            return res.status(500).json({
                message: "Error occurred while finding the patient's healthcard"
            });
        });
    };
    
    filterSpecialists = (patient, callback) => {
        const { type } = req.query;
        Specialist.find({ type })
        .then(specialists => {
            callback(null, patient, specialists);
        })
        .catch(err => {
            return res.status(500).json({
                message: "An error occurred while filtering the specialists"
            })
        });
    };
        
    computeAlgorithm = (patient, specialists, callback) => {   
        let ranking = specialists.length;
        let total = 0;
            
        // compute averages
        // moment format
        for(let i = 0; specialists.length; i++) {
            total = total + specialists.availability;
        };
        avgAvail = total/specialists.length;
        total = 0;

        for(let i = 0; specialists.length; i++) {
            total = total + specialists.distance;
        };
        avgDist = total/specialists.length;
        total = 0;

        for(let i = 0; specialists.length; i++) {
            total = total + specialists.experience;
        };
        avgExp = total/specialists.length;

        // extract data for std calculation
        for(let i = 0; specialists.length; i++) {
            exp[i] = specialists[i].experience;
        };

        for(let i = 0; specialists.length; i++) {
            avail[i] = specialists.availability;
        };

        for(let i = 0; specialists.length; i++) {
            dist[i] = specialists[i].distance;
        };

        // calculate standard deviations
        stdExp = math.std(exp);
        stdAvail = math.std(avail);
        stdDist = math.std(dist);

        // compute scores
        for(let i = 0; specialists.length; i++) {
            score = 3.68*(specialists.experience-avgExp)/stdExp - 
            2.33*(specialists.availability-avgAvail)/stdAvail - 
            (specialists.distance-avgDist)/stdDist;

            specialists.score = score;
        };

        for(let i = 0; specialists.length; i++) {
            for(let j = 0; specialists.length; i++) {
                if(specialists[i].score > specialists[j].score) {
                    ranking = ranking - 1;
                };
            };
            ranking = specialists.length;
        };
        
    
        // pass output of above algorithim into callback below
        callback(null, patient, rankedSpecialists);
    };
    
    sortSpecialists = (patient, rankedSpecialists, callback) => {
        // var sortedOptions = [];
        for(let i = 0; rankedSpecialists.length; i++){
            let rank = rankedSpecialists[i].ranking;
            sortedOptions[rank-1] = rankedSpecialists[i]; 
        }
        
        callback(null, patient, sortedOptions);
    };

    limitOptions = (patient, sortedOptions, callback) => {
        var slicedOptions = [];
        for(var i = 0; i < 10; i++){
            slicedOptions[i] = sortedOptions[i];
        };

        callback(null, patient, slicedOptions);
    };
    
    async.waterfall([
        getHealthCard,
        filterSpecialists,
        computeAlgorithm,
        sortSpecialists,
        limitOptions
    ], (err, results) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        } else {
            return res.status(200).json(results);
        };
    });
});

// Get data for appointment
app.get("/appointment", (req, res) => {
    
});

// Post confirmation of booked appointment
app.post("/booking", (req, res) => {
    const { } = req.body;

    async.parallel({
        patient: callback => {
            
        },
        specialist: callback => {

        }, 
        confirmation: callback => {

        }
    }, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            })
        } else {
            return res.status(201).json(results);
        };
    });
});

/* Bootup */
app.listen(port, () => {
	console.log(`Your server is up and running on port ${port}`);
});

module.exports = app;