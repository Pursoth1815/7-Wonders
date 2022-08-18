import React from "react";
import Card from "./Card";

import Data from '../data/data';
import '../assets/css/body.css'

export default function Body() {

    const cards = Data.map( item => {
        return(
            <Card 
                key={item.id}
                id={item.id}
                title={item.title}
                imgs={item.img}
            />
        )
    })

    return (
        <div className="Container">
            <section className="Container--Body">
                {cards}
            </section>
        </div>
    )
}