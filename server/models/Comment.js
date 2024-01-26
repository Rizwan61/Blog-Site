var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    
    pid:String,
    comment:String,
    
    status:{
        type:String,
        default:'pending',
        enum:['pending','approved']
    }
},{timestamps:true});

const Comment = mongoose.model('Comment',UserSchema);
module.exports = Comment