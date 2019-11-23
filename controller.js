// async functions and date formatting
const async = require("async");
const moment = require("moment");

// import models
const Patient = require("./models/Patient");
const Specialist = require("./models/Specialist");

// instantiate controller
const controller = [];

// potentially redundant
// render home page
controller.index = (req, res) => {

};


// potentially redundant
// render search page
controller.search = (req, res) => {

};

/*
    - find patient with the matching id
    - Query database for specialists matching the type and rank order the best ten based on the algorithim
    ^ Use google maps api to calculate distance between patient and specialist
    - Return results to client
*/
controller.results = (req, res) => {
    
};

/*
    get specialist matching spec id and return spec props to client
*/
controller.appointment = (req, res) => {
    
};

// POST appointment and return error
controller.booking = (req, res) => {
    const { } = req.body;

    const appointment = {
        
    };

    appointment.save()
    .then(newApp => {
        return res.status(201).json(newApp);
    })
    .catch(err => {
        return res.status(500).json({
            message: "An error occured while creating this appointment. Please try again."
        });
    }); 
};


module.exports = controller;