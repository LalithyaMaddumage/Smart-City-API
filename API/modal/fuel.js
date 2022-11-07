const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FuelSchema = new Schema({
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
    petrol: {
        type: String,
        required:true,
        
    },
    diesel: {
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

const Fuel = mongoose.model("Fuel", FuelSchema);
module.exports = Fuel;