# Academically_Global-Project
MERN Stack Project to manage Courses
                       Academically Global Assessment:
This a MERN stack Project, where i will be using MongoDB as Database, Express Js as platform ,React Js for designing FrontEnd and Node Js for Backend purpose.

Admin Functionalities: To Add Course, Upadate Existing Course also can Delete Course.
User Functionalities : To Browse Course.

#Day1:

-Backend(Node js) SetUp:

Visit "nodejs.org" site and download the Node.js, I have used v20.12.2. version in this project.
Now create a new folder and open that folder in Visual Studio Code and start new Terminal and write commands like 
"npm init" 
-this command will ask you various quetions like what is project name:,description..etc..
install other packages as well:
"npm i express"
"npm i mongoose"
"npm i nodemon"
"npm i cors"

In the index.js file create a root route 
<!--  
app.get("/",(req,resp)=>{
  resp.send("Server Started on port 5000.....")
});

app.listen(5000);//this port number can vary -->

-Frontend(React js) SetUp:
Now inorder to install react we need node because react is installed using npm and npm & npx get automatically installed on installing nodejs.
"npx create-react-app frontend"
-this command will create new folder and open Visual Studio Code via that folder now to start react use "npm start" command.

Once you open the frontend folder in Visual Studio you can see various folder structures like 
node_modules- this folder has all the libraries inside it.
public- has all static file in it.
src- we do our work inside the src folder basically app.js is the entry point index.js file used as root component.

add some more packages like :
"npm i react-router-dom"
To use routes in our application make wrapper:
import { BrowserRouter } from 'react-router-dom'; inside app.js file

All the routes need to be defined inside this Wrapper like:

<!-- function App(){
return(
    <BrowserRouter>
    <NavBar/>
    <Routes>
       <Route path="/" element={<h1>Course Component</h1>}/>
    </Routes>
    <BrowserRouter>
);
} -->
 
--Database SetUp:
MongoDB create Database namely: AcademicallyGlobal
create Collection as well name it: users
now create a folder name db and inside it create a config.js file having all db credientials to connect to database:

<!-- const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/AcademicallyGlobal"); -->

create one more file namely:
-"User.js" ,it is model for users collection 
provide schema that matches all the fields with the database users colection

<!-- const mongoose=require('mongoose');
//model for Users Collection
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports=mongoose.model("user",userSchema);
 -->
 
 "same for Courses Collection as well,one thing to remember the model name needs to match with the collection name while exporting schema."

Now we can check the connectivity of DB with server using POSTMAN using http://localhost:5000/register and provide data in the form of JSON inside body 

-SignUp Component:
This component will get data like full Name, Email and Password to fetch data from input fields use hook i.e useState
fetch function API is used for integrating the APIs


//DATABASE INFO:
create database -AcademicallyGlobal
create collections-users and courses
=======================================================================
users:{
  "_id": {
    "$oid": "675c429e69090e9a70316403"
  },
  "name": "Ajju Singh",
  "email": "ajju@gmail.com",
  "password": "12345",
  "__v": 0
}

{
  "_id": {
    "$oid": "675c81ec732b9a716da976f2"
  },
  "name": "Shital Wasade",
  "email": "shital@gmail.com",
  "password": "123",
  "__v": 0
}
====================================================================

courses collection-
{
  "_id": {
    "$oid": "675c37b091a238e1d3ddeb32"
  },
  "title": "CDAC",
  "duration": "6month",
  "discription": "Development in Advanced Computing",
  "instructor": "Nilesh Ghule",
  "userId": "675c373aa586101a75ab0953",
  "__v": 0
}
{
  "_id": {
    "$oid": "675ee4e29cf90165189ad725"
  },
  "title": "DMC",
  "duration": "3months",
  "discription": "Android Development Course",
  "instructor": "Madhura Madam",
  "userId": "675c81ec732b9a716da976f2",
  "__v": 0
}
{
  "_id": {
    "$oid": "675f2b9a26f58c2dbf825b6a"
  },
  "title": "DBDA",
  "duration": "5months",
  "discription": "Big Data Course",
  "instructor": "Jyoti Madam",
  "userId": "675c81ec732b9a716da976f2",
  "__v": 0
}

===================================================================
