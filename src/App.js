import logo from './logo.svg';
import react, { Component } from 'react'
import './App.css';
import WeatherSearch from './Components/WeatherSearch';
import CurrentWeather from './Components/ForecastDisplay/CurrentWeather';
import HourlyForecast from './Components/ForecastDisplay/HourlyForecast';
import DailyForecast from './Components/ForecastDisplay/DailyForecast';
import { useState,useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
  Link
} from "react-router-dom";

function getDate(seconds){
  const time = seconds * 1000
  let date = new Date(time)
  return (date)
}

function getTime(seconds){
  const date = getDate(seconds)
  let time = date.toLocaleString('en-US', {
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    second: 'numeric', // numeric, 2-digit
})
  return (time)
}

function convertTemp(temp,unit) {
  let newTemp
  if (unit = "fahrenheit ")
  {
    newTemp = ((temp - 273.15) * 1.8) + 32
  }
  else if (unit = "celsius")
  {
    newTemp = (temp - 273.15)
  }
  newTemp = Math.round((newTemp + Number.EPSILON) * 100) / 100
  return (newTemp)
}

function App() {

  const [address,setAddress] = useState('')
  const [location,setLocation] = useState()
  //set to false to prevent current weeather from showing
  const [weather,setWeather] = useState(false)
  
  function Forecast() {
    if (weather == false) {
      return( <div></div>
      )

  }
   else{    
     return(
    <div className='Forecasts'>
      <Link to="/HourlyForecast"><div><button><h4>Hourly Forecast</h4></button></div></Link>
      <Link to="/DailyForecast"><div><button><h4>Daily Forecast</h4></button></div></Link></div>
  )}

  }
  
    return (

    
    <div className="App">
      <header>
      <h1>Weather App</h1>
      </header>

      <WeatherSearch 
      address={address}   setAddress={setAddress}
      weather={weather}   setWeather={setWeather}
      location={location} setLocation={setLocation}/>
      
      
      <CurrentWeather 
      weather={weather}
      location={location}
      convertTemp={convertTemp}
      getDate={getDate}
      getTime={getTime}  
      />
      
      <div>
      <Router>
      <Forecast/>
      <Routes>
          <Route path="/"/>
        </Routes>
        <Routes>
          <Route path="/HourlyForecast" element={<HourlyForecast
           
           weather={weather}
           getDate={getDate}
           getTime={getTime}
           convertTemp={convertTemp}
           />}/>
        </Routes>
        <Routes>
          <Route path="/DailyForecast" element={<DailyForecast
           
           weather={weather}
           getDate={getDate}
           getTime={getTime}
           convertTemp={convertTemp}
           />}/>
        </Routes>
        <Routes>

        </Routes>
      </Router>
      </div>
      
      
      
    </div> )
  
    
}

export default App;
