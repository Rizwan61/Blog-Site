var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    
    postid:String,
    comment:String,
    
    status:{
        type:String,
        enum:['pending','approved']
    }
},{timestamps:true});

const Comment = mongoose.model('Comment',UserSchema);
module.exports = Comment