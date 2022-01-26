
import Grid from '@material-ui/core/Grid';
import DayReport from './DayReport'
import { useState,useEffect } from 'react'


export default function DailyForecast(props){
    
  return (
   <div>
       <div>
       
                <Grid className="forecast" container spacing={3}>
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
  );
}
