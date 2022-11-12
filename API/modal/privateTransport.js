const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrivateTransportSchema = new Schema({
    vehicle: {
        type: String,
        required:true
    },
    type: {
        type: String,
        required:true,
    
    },
    vehicleNo: {
        type: String,
        required:true
    },
    contact: {
        type: String,
        required:true,
        maxlength: 10,
        minlength: 10,
    },
    km: {
        type: String,
        required:true
    },
    totalPrice: {
        type: String,
        required:true
    }
})

const PrivateTransport = mongoose.model("PrivateTransport", PrivateTransportSchema);
module.exports = PrivateTransport;