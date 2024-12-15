const mongoose=require('mongoose');
//model for Courses Collection
const courseSchema= new mongoose.Schema({
    title:String,
    duration:String,
    discription:String,
    instructor:String,
    userId:String
});

module.exports=mongoose.model("Courses",courseSchema);