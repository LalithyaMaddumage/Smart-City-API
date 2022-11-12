const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const port = 4000;

const URL = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json());



mongoose.connect(URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindandModify: false
});

const connection = mongoose.connection;
app.listen(port, () => {
    console.log(`Server Is Running on Port: ${port}`);
});

connection.once("open", () => {
    console.log("Mongodb Connection success!");
})

const Fuel = require("./routes/fuelRoute");
app.use("/Fuel", Fuel);

//water
const Water = require("./routes/waterRoute");
app.use("/Water", Water);

//electricity
const Electricity = require("./routes/electricityRoute");
app.use("/Electricity", Electricity);

//login
const Login = require("./routes/loginRoute");
app.use("/Login", Login);