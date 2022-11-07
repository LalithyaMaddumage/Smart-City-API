const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GasSchema = new Schema({
    stationName: {
        type: String,
        required:true,
        unique: true
    },
    location: {
        type: String,
        required:true,
    
    },
    from: {
        type: String,
        required:true,
        
    },
    to: {
        type: String,
        required:true
    },
    availability: {
        type: String,
        required:true,
        
    },
    contact: {
        type: String,
        required:true,
        maxlength: 10,
        minlength: 10,
    }
})

const Gas = mongoose.model("Gas", GasSchema);
module.exports = Gas;