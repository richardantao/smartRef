const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;
// const db = require("./config/db");

// routes
const router = require("./router");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(logger("dev"));
app.use(cors());

app.use("/", router);

// test route
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

// bootup
app.listen(port, () => {
	console.log(`Your server is up and running on port ${port}`);
});

module.exports = app;