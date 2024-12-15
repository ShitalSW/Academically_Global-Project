
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';
const SignUp=()=>{
    const [name,setName]=useState("");//will set the respective values inside states
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate= useNavigate();
    useEffect(()=>{
       
        const auth= localStorage.getItem('user');
        if(auth)
        {
            navigate('/');
        }
    })
  
    //to collect data from user
    const collectData= async ()=>{
        console.warn(name,email,password);
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
         result=await result.json()
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/');
        
    }
    return(
        <div>
        <Navbar/>
        <div className='register'><h2>Register</h2>
        <center>
        <input className='input-box' type='text'value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Full Name'/>
        <input  className='input-box' type='email' value={email}  onChange={(e)=>setEmail(e.target.value)}placeholder='Enter Email'/>
        <input  className='input-box' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
        <button className='btn' type='button' onClick={collectData}>Submit</button>
        </center>
        </div>
        <Footer/>
        </div>
    )
}

export default SignUp;