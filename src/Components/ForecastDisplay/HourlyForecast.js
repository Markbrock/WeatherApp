import { getThemeProps } from "@mui/system";
import Grid from '@material-ui/core/Grid';
import HourReport from './HourReport'
import { useState,useEffect } from 'react'


export default function HourlyForecast(props){
    
  return (
   <div>
       <div>
       
                <Grid className="forecast" container spacing={3}>
                {props.weather.hourly.map((hourly) => (
                  
                  <HourReport 
                  
                  convertTemp={props.convertTemp}
                  getDate={props.getDate}
                  getTime={props.getTime} 
                  hourly = {hourly}
                  getTime = {props.getTime}
                  />
                  ))}
                  </Grid>
              
       </div>
   </div>
  );
}
