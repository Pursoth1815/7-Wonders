import React from "react";

import '../assets/css/body.css';


export default function Card(props) {
    return(
        <div className="Card">
            <img src={`images/${props.imgs}`} className="Card--Image" alt="" />
            <h4 className="Card--Title">{props.title}</h4>
        </div>
    )
} 