import React from "react"

const PhotoCard = props => {

    return (
        <div className="photo-card">
            <h2>{props.title}</h2>
            <img className = "today-photo" alt = "NASA's photo of the day" src = {props.image}/>
            <p>{props.explain}</p>
        </div>
    )
}

export default PhotoCard