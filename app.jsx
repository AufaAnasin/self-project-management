// import the express framework 
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
    app.use(bodyParser.json());

// load the databases
const mongoose = require("mongoose");
    mongoose.connect("mongodb+srv://AufaAnasin:1301180497Aufa@started.zuvbmle.mongodb.net/?retryWrites=true&w=majority", () => {
        console.log("Database Connected")
    });

// set the port
app.get('/', (req, res) => res.send('Hello world!'));
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));