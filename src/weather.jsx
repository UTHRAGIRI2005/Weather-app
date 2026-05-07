import { useState } from "react"
import axios from "axios"


function Weather(){

  var area = "chennai"
  const [city,setcity] = useState()
  const [showcity,setshowcity] = useState()

  const [weather,setweather] =useState()
  const [Description,setdescription] = useState()
  const [Temperature,settemperature] = useState()
  


  function handlecity(event){

    setcity(event.target.value)

    

  }
   
 

  function getWeather(){

    var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc0f76e31a6924eb6e6df9cfdbc84aa2`)
    weatherdata.then(function(msg){
      console.log(msg)
      setweather(msg.data.weather[0].main)
      setdescription(msg.data.weather[0].description)
      settemperature(msg.data.main.temp)
    })
    setshowcity(city)
    setcity("")
  }


  return(
    <div className=" bg-black p-14 ">
      <div className=" bg-green-400 p-12 border rounded-md">

        <h1 className="text-3xl font-medium">Weather Report</h1>
        <p className="my-1">I can give you a weather report about your city!</p>

        <input value={city}  onChange={handlecity} className="p-1 mt-2 border border-black rounded-md bg-white" type="text" placeholder="Enter your City Name" /> <br />
        <button onClick={getWeather} className=" text-white bg-black p-1 rounded-md mt-3">Get Report</button>

        <div>
          <h1><b>Location:</b> {showcity}</h1>
          <h1><b>Weather:</b> {weather}</h1>
          <p><b>Temperature: </b>{Temperature}</p>
          <p><b>Description: </b>{Description}</p>
        </div>

      </div>

    </div>
  )
}

export default Weather