const mongoose=require('mongoose');
//model for Users Collection
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports=mongoose.model("user",userSchema);