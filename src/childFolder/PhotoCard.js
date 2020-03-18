import React from "react"

const PhotoCard = props => {

    return (
        <div className="photo-card">
            <h2>Title: </h2>
            <img className="today-photo" alt="NASA's photo of the day: TITLE" src="https://apod.nasa.gov/apod/image/2003/AntiCrepRays_Goff_3072.jpg"/>
            <p>Explanation: details of photo-science, blah blah etc.</p>
        </div>
    )
}

export default PhotoCard