const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    UserName : {
        type : String,
        required : true,
        unique : true
    },
    Password : {
        type : String,
        required : true,
        unique : true
    },
    Email: {
        type : String,
        required : true,
        unique : true
    }
})

const Login = mongoose.model("Login", LoginSchema);
module.exports = Login;