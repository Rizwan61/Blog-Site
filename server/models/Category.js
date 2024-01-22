var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    title:String,
    image:String,
},{timestamps:true});

const Category = mongoose.model('Category',UserSchema);
module.exports = Category