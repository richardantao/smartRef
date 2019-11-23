const controller = require("./controller");
const router = require("express").Router();

// home page
router.get("/", controller.index);

// search
router.get("/search", controller.search);

// search query
router.get("/search/:_id?", controller.results);

// appointment
router.get("/appointment", controller.appointment);

// booking
router.post("/booking", controller.booking);

module.exports = router;
