import React, {useState, useEffect} from "react"
import PhotoCard from "./PhotoCard"
import axios from "axios"

const PhotoParent = () => {
    //set up our states
    const [photos, setPhotos] = useState([])

    //useState with our axios.get.then.catch
    useEffect(()=> {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=adtsDp3gRwEeo3BrknW0illTpiNlF0wdgRUL0O2l')
        .then(response=>{
            console.log(response.data)
            setPhotos(response.data)
        })
        .catch(error => {
            console.log('ERROR: DATA NOT RESPONDING', error)
        })
    }, [])

    return(
    <div className="card">
        <div className="entry">
        {/* {photos.map((photo, index)=>{ */}
            return <PhotoCard title={photos.title} image={photos.url} explain={photos.explanation}/> 
        {/* })} */}
        </div>
    </div>
    )
}
export default PhotoParent