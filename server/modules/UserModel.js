var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    image:String,
    password:String,
},{timestamps:true});

const UserModel = mongoose.model('user',UserSchema);
module.exports = UserModel