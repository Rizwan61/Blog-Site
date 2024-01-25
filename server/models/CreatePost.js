  


  var mongoose = require('mongoose')

  var UserSchema = new mongoose.Schema({
    userid:String,
    title:String,
    description:String,
   
    category:{
      type:String,
      enum:['Leptop','Computer','Vivo Mobiles','Oppo Mobiles']
    },
    image:String,
    detail:String,
    status:{
        type:String,
        enum:['true','false']
    }


  },{timestamps:true})
  const CreatePost = mongoose.model('CreatePost',UserSchema);
module.exports = CreatePost