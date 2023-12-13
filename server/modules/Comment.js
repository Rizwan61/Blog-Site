var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    userid:String,
    postid:String,
    comment:String,
    
    status:{
        type:String,
        enum:['true','false']
    }
},{timestamps:true});

const Comment = mongoose.model('Comment',UserSchema);
module.exports = Comment