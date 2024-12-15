import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './MainPage';


const Login=()=>{
    const [email,setEmail]=React.useState('');
    const [password, setPaassword]=React.useState('');
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate("/Home")
        }
    })

    const handleLogin= async ()=>{
        console.warn(email,password)
        let result= await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers: {
                'Content-Type':'application/json'
            }
     });
      result= await result.json();
      console.warn(result);
      if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/Home")
      }else{
        alert("Please Enter Valid Details")
    }
    }
    return(
        <div className='login'>
            <h2>Login</h2>
            <center>
            <input className='input-box' type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input className='input-box' type='text' placeholder='Enter Password' onChange={(e)=>setPaassword(e.target.value)} value={password}/>
            <button  className='btn' type='button' onClick={handleLogin}>LogIn</button>
            </center>
        </div>
    )
}

export default Login;