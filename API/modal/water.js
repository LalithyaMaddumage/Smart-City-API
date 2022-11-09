const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WaterSchema = new Schema({
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

const Water = mongoose.model("Water",WaterSchema);
module.exports = Water;