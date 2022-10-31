const mongoose = require('mongoose');
require("dotenv").config();

const dbURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qhgupmk.mongodb.net/inventory`

mongoose.connect(dbURL)
    .then(() => {
        console.log("MONGOdb is connect");
    })
    .catch(error => {
        console.log(error);
    });