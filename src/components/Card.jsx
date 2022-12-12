import React from "react"
import "../App.css"

const Card = (props) => {
    return(
        <div className="cardContainer">
            <article className="card">
                <img src={props.imageUrl} className="image"></img>
                <div className="about-section">
                    <div className="location">
                        <img src="./path.svg" className="locationImg"></img>
                        <p className="location--Country">{props.location}</p>
                        <p className="location--URL"><a href={props.googleMapsUrl} target="_blank" className="link">View on Google Maps</a></p>
                    </div>
                    <div className="title">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="description">
                        <h3 className="date">{props.startDate} - {props.endDate}</h3>
                        <p className="about">{props.description}</p>
                    </div>
                </div>
            </article> 
        </div>
        
    )
}

export default Card;