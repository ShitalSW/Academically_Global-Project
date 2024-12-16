  const express= require('express');
  const cors=require("cors");//to handel cors issue
  require('./db/config');
  const User=require('./db/User');
  const Course=require('./db/Course');
  const app = express();
  app.use(express.json());//middleware to get file body inside Route
  app.use(cors());//using CORS as a middleware

  //Route for Register API
  app.post("/register", async (req,resp)=>{
    let user=new User(req.body); //instance of User Collection model 
    let result= await user.save();// retuns promise thus await keyword
    result = result.toObject();
    delete result.password
    resp.send(result);
  })
  
  //Route for Login API
  app.post("/login", async (req,resp)=>{
    console.log(req.body)
    if(req.body.password && req.body.email)
    {
     let user= await User.findOne(req.body).select("-password");//will remove password
     if(user)
     {
      resp.send(user)
     }else{
      resp.send({result: 'NO User Found'})
     }

    } else{
    resp.send({result:"No User Found"});
  }
})

//Route for Add Course API
app.post("/add-course", async (req,resp)=>{
  let course = new Course(req.body);
  let result= await course.save();
  resp.send(result)
})

//Route to get all Course
app.get("/all-courses", async(req,resp)=>{
  let courses= await Course.find();
  if(courses.length>0){
    resp.send(courses)
  }else{
    resp.send({result:"No Course available"});
  }
})

//Route to detele particular Course
app.delete("/course/:id", async (req,resp)=>{
  let result= await Course.deleteOne({_id:req.params.id});
  resp.send(result)
}),

//Route to fetch data based on userid  
app.get("/course/:id", async(req,resp)=>{
  let result= await Course.findOne({_id:req.params.id})
  if(result){
    resp.send(result)
  }else{
    resp.send({"result":"No Record Found"});
  }
})


//Route to Update Course
app.put("/course/:id", async (req,resp)=>{
  let result=await Course.updateOne({_id:req.params.id},{$set:req.body})//updateOn method has two parameter on which behalf we want to update the data,and data to be added
  resp.send(result)
})


//Route TO search particular Course
app.get("/search/:key", async (req,resp)=>{//inorder to fetch the data will use get method//key here will find the data based on multiple field

  let result= await Course.find({
    "$or":[//$or will help us to search in multiple fileds
      {
        title:{ $regex : req.params.key }//will search based on title of course
       
      },
      {
        duration: { $regex: req.params.key }//will search based on duration of course
      },
      {
        instructor: { $regex: req.params.key }// will search based on instructor teaching 
      }
    ]
  });
  resp.send(result);
})


app.listen(5000); //our server started on port 5000