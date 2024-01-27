var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    name:String
},{timestamps:true});

const Category = mongoose.model('Category',UserSchema);
module.exports = Category