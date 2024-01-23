  


  var mongoose = require('mongoose')

  var UserSchema = new mongoose.Schema({
    userid:String,
    title:String,
    description:String,
   
    category:{
      type:String,
      enum:['Mobile','Laptop']
    },
    image:String,
    status:{
        type:String,
        enum:['true','false']
    }


  },{timestamps:true})
  const CreatePost = mongoose.model('CreatePost',UserSchema);
module.exports = CreatePost