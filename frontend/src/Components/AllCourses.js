import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';

const AllCourses=()=>{
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        getCourses();//to Get List of all the Courses
    },[])

    const getCourses= async()=>{
     let result= await fetch('http://localhost:5000/all-courses');
      result= await result.json();
       setCourses(result);
    }
    const deleteCourse= async (id)=>{
        console.warn(id);
        let result= await fetch(`http://localhost:5000/course/${id}`,{
            method:"Delete"
        });
        result=result.json();
        if(result)
        {
            getCourses();
        }
    }

   const searchHandle= async (event)=>{
       let key=event.target.value;
       if(key){
       let result= await fetch(`http://localhost:5000/search/${key}`);
       result= await result.json()
       if(result){
        setCourses(result);//to get the data from API and set in the state
       }
    }else{
        getCourses();
    }
    }
    
    return(
        <div className="courses-list">
           <h2>ALL Courses</h2>
           <input type="" className="search-box" placeholder="Search Course" onChange={searchHandle} />
            <ul className="courses-list ul li">
                
                <li>S.No</li>
                <li>Title</li>
                <li>Duration</li>
                <li>Discription</li>
                <li>Instructor</li>
                <li>Operation</li>
            </ul>
            { 
                courses.length>0 ? courses.map((item,index)=>
               <ul key={item._id} className="courses-list ul li">
                
                <li>{index+1}</li>
                <li>{item.title}</li>
                <li>{item.duration}</li>
                <li>{item.discription}</li>
                <li>{item.instructor}</li>
                <li><button className='delete-btn' onClick={()=>deleteCourse(item._id)}>Delete</button>
                <Link to={"/update/"+item._id}>Update</Link>
                </li>
                </ul>
                )  
               :<h2>"No result Found"</h2>
            }
        </div>
    )
}

export default AllCourses;