
import img1 from '../Img/cap.jpg'
import img2 from '../Img/office.jpg'
import img3 from '../Img/image.png'
import Card from "./CourseCard";
import React from "react";
import "../index.css"

function MainPage(){
    return(
        <>
        <h1 className="heading">CARDS MAIN PAGE</h1>
        <div className="card-comp">
        <Card title="CDAC" img={img1}/>
        <Card title="DBDA" img={img2}/>
        <Card title="DMC" img={img3}/>
        <Card img={img2}/>
        <Card img={img3}/>
        <Card img={img1}/>
        </div>
        </>
    )
}

export default MainPage;