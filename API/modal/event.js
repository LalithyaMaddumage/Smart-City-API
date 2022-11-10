const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    eventType: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required:true,
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
    timeFrom: {
        type: String,
        required:true,
        
    },
    timeTo: {
        type: String,
        required:true
    },
    contact: {
        type: String,
        required:true,
        maxlength: 10,
        minlength: 10,
    },

    Favourite:{
        type:Boolean,
        default:false

    }
})

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;