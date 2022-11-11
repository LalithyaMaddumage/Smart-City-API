const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublicTransportSchema = new Schema({
    routeNo: {
        type: String,
        required:true,
        unique: true
    },
    route: {
        type: String,
        required:true,
    
    },
    discription: {
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
    }
})

const PublicTransport = mongoose.model("PublicTransport", PublicTransportSchema);
module.exports = PublicTransport;