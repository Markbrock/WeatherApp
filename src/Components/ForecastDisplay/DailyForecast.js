
import Grid from '@material-ui/core/Grid';
import DayReport from './DayReport'
import { useState,useEffect } from 'react'
import {Navigate} from 'react-router-dom'


export default function DailyForecast(props){
    if (props.weather != false){
  return (
   <div>
  
       <div>
       
                <Grid className="forecast" justifyContent='space-evenly' container spacing={3}>
                {props.weather.daily.map((daily) => (
                  
                  <DayReport 
                  
                  convertTemp={props.convertTemp}
                  getDate={props.getDate}
                  getTime={props.getTime} 
                  daily = {daily}
                  getTime = {props.getTime}
                  />
                  ))}
                  </Grid>
              
       </div>
   </div>
  );} 
  else return (<Navigate to="/" replace={true}/>);
}
