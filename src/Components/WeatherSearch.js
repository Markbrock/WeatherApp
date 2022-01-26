import {
Link
} from "react-router-dom";

import { useState,useEffect } from 'react'
export default function WeatherSearch(props){

    async function geoCode(event){
        
        event.preventDefault()
        const url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + props.address + "&7Ccountry%3US&key=" + process.env.REACT_APP_GOOGLE_MAPS_KEY
        
        
            const response = await fetch(url)
            const data = ( await response.json())
            GetWeather(data.results[0].geometry.location.lat,data.results[0].geometry.location.lng,data.results[0].formatted_address)
            

       }

       async function GetWeather(lat,lon,address){
        const url = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&appid=" + process.env.REACT_APP_OPEN_WEATHER_KEY
        const response = await fetch(url)
        const data = await response.json();
        await props.setWeather(data)
        props.setLocation(address)   
           
       }

    return ( 
        <form onSubmit={geoCode}>
            <input  onChange={event => props.setAddress(event.target.value)} type="text" placeholder=" Address" ></input>
            <br/>
            <br/>
            <button  type="submit">Get Weather</button>
        </form>
    )
    
}