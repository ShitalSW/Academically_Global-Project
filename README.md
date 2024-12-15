Academically Global - Project Overview
MERN Stack Project for Course Management

This project is built using the MERN stack, leveraging MongoDB as the database, Express.js as the backend framework, React.js for the frontend, and Node.js as the runtime environment.

Features:
Admin Functionalities:

Add courses
Update existing courses
Delete courses
User Functionalities:

Browse available courses
Day 1:
Backend (Node.js) Setup
Download Node.js:
Visit nodejs.org and download Node.js (version 20.12.2 was used for this project).

Initialize the Project:

Create a new folder for the project.
Open the folder in Visual Studio Code.
Start a new terminal and run the following commands:

npm init
This command will prompt you to fill in project details such as name, description, etc.
Install Required Packages:
Run the following commands to install the necessary dependencies:


npm install express mongoose nodemon cors
Create a Root Route:
Add the following code in the index.js file:


const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Server started on port 5000...");
});

app.listen(5000, () => console.log("Listening on port 5000"));
Frontend (React.js) Setup
Install React:
React requires Node.js for installation. Run the following command to create a new React app:


npx create-react-app frontend
Start the React App:
Open the frontend folder in Visual Studio Code and start the app using:


npm start
Folder Structure Overview:

node_modules: Contains all installed libraries.
public: Holds static files.
src: Contains application code. The App.js file is the entry point, while index.js serves as the root component.
Install Additional Packages:
To use routing in the application, install:


npm install react-router-dom
Setup Routes:
Wrap your application in a BrowserRouter and define routes as shown:

javascript

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<h1>Course Component</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
Database Setup (MongoDB)
Create a Database:

Name the database: AcademicallyGlobal
Create collections:
users
courses
Database Configuration:

Create a folder named db and a file config.js to manage database credentials:

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/AcademicallyGlobal");
Create Models:

Create a file User.js for the users collection schema:

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model("user", userSchema);
Similarly, create a model for the courses collection, ensuring the model name matches the collection name.
Test Database Connectivity:
Use Postman to test API connectivity. For example, test the /register endpoint using http://localhost:5000/register and send JSON data in the request body.

SignUp Component
The SignUp component collects user details (name, email, password) and integrates APIs using the fetch function. Use React's useState hook to manage input fields.

Database Information
Database Name: AcademicallyGlobal
Users Collection:
json
{
  "_id": "675c429e69090e9a70316403",
  "name": "Ajju Singh",
  "email": "ajju@gmail.com",
  "password": "12345",
  "__v": 0
},
{
  "_id": "675c81ec732b9a716da976f2",
  "name": "Shital Wasade",
  "email": "shital@gmail.com",
  "password": "123",
  "__v": 0
}
Courses Collection:
json

{
  "_id": "675c37b091a238e1d3ddeb32",
  "title": "CDAC",
  "duration": "6 months",
  "description": "Development in Advanced Computing",
  "instructor": "Nilesh Ghule",
  "userId": "675c373aa586101a75ab0953",
  "__v": 0
},
{
  "_id": "675ee4e29cf90165189ad725",
  "title": "DMC",
  "duration": "3 months",
  "description": "Android Development Course",
  "instructor": "Madhura Madam",
  "userId": "675c81ec732b9a716da976f2",
  "__v": 0
},
{
  "_id": "675f2b9a26f58c2dbf825b6a",
  "title": "DBDA",
  "duration": "5 months",
  "description": "Big Data Course",
  "instructor": "Jyoti Madam",
  "userId": "675c81ec732b9a716da976f2",
  "__v": 0
}
