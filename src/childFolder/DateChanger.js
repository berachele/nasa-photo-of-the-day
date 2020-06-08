  import React, {useState, useEffect} from "react"
  import PhotoParent from "./grandChildFolder/PhotoParent"
  import axios from "axios"
  
function DateChanger(){
  //set up states for showing currect date
  const [date, setDate] = useState("2020-03-19")//returning as bad request error 400 when I do this, empty string, array or object

  // //useEffect--commenting out so I don't run out of requests while styling
  // useEffect(()=>{
  //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
  //   .then(response=>{
  //     console.log(response.data)
  //     console.log("THIS IS THE DATE", date)
  //     setDate(response.data)
  //   })
  //   .catch(error=>{
  //     console.log('DATE ERROR', error)
  //   })
  // }, [date]) // put in date

  return (
    <div className="dropdown-menu">
        <select>
            <option value="March 19" onClick={()=> setDate("2020-03-19")}>2020-03-19</option>
            <option value="March 18" onClick={()=> setDate("2020-03-18")}>2020-03-18</option>
            <option value="March 17" onClick={()=> setDate("2020-03-17")}>2020-03-17</option>
            <option value="March 16" onClick={()=> setDate("2020-03-16")}>2020-03-16</option>
            <option value="March 15" onClick={()=> setDate("2020-03-15")}>2020-03-15</option>
            {/* <div className="entry">
                <PhotoParent/> 
            </div> */}
        </select>
    </div>
  )
}

export default DateChanger