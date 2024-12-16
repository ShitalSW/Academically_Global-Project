
import React from "react";
import img from '../Img/cap.jpg'
import "../index.css"
function Card(props){
    console.log(props);
    return(
        <>
         <div className="card">
            <img src={props.img} alt="Course Img"/>
            <h3>Course {props.title}</h3>
         </div>
        </>
    )
}

export default Card;