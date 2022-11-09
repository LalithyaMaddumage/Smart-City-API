const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ElectricitySchema = new Schema({
    Location: {
        type: String,
        required: true
    },
    From: {
        type: String,
        required: true
    },
    To: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    }

})

const Electricity = mongoose.model("Electricity",ElectricitySchema);
module.exports = Electricity;