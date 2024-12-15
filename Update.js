import React, { use, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Update=()=>{
    const [title,setTitle]=React.useState('');
    const [duration,setDuration]=React.useState('');
    const [discription,setDiscription]=React.useState('');
    const [instructor,setInstructor]=React.useState('');
    const params=useParams();

    useEffect(()=>{
        getCourseDetails()
    },[])

    const getCourseDetails= async()=>{
      let result= await fetch(`http://localhost:5000/course/${params.id}`);
      result=  await result.json()
      console.warn(result)
      setTitle(result.title);
      setDuration(result.duration);
      setDiscription(result.discription);
      setInstructor(result.instructor);
    }

    const Update= async ()=>{
       
       console.warn(title,duration,discription,instructor);
    }

    return(
        <div className='course'>
            <center>
            <h1>Update Course</h1>
            <input className='input-box' onChange={(e)=>{setTitle(e.target.value)}} type='text' value={title} placeholder='Enter Course Title'/>
            
            
            <input className='input-box' onChange={(e)=>{setDuration(e.target.value)}} type='text' value={duration} placeholder='Enter Duration '/>
           
            <input className='input-box' onChange={(e)=>{setDiscription(e.target.value)}} type='text' value={discription} placeholder='Discription about Course'/>
           

            <input className='input-box' onChange={(e)=>{setInstructor(e.target.value)}} type='text'  value={instructor}placeholder='Enter Instructor Name'/>
           

            <button className='btn' onClick={Update} type='button'>Update Course</button>
            </center>
        </div>
    )
};

export default Update;