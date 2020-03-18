  import React, {useState, useEffect} from "react"
  import axios from "axios"
  
function DateChanger(){
  //set up states for showing currect date
  const [date, setDate] = useState("2020-03-17")

  //useEffect
  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
    .then(response=>{
      console.log(response.data)
      setDate(response.data)
    })
    .catch(error=>{
      console.log('DATE ERROR DIDN"T', error)
    })
  }, [date]) //can put in date later

  return (
    <div className="dropdown-menu">
        <select>
            <option value="date">2020-03-18</option>
            <option value="date">2020-03-17</option>
            <option value="date">2020-03-16</option>
            <option value="date">2020-03-15</option>
        </select>
    </div>
  )
}

export default DateChanger