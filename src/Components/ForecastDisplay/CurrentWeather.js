import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



export default function CurrentWeather(props){
   
    console.log()
    if (props.weather == false) {
        return(<div></div>)

    }
     else
     
       {
        let d = props.getDate(props.weather.current.dt) 
        let sunrise = props.getTime(props.weather.current.sunrise)
        let sunset = props.getTime(props.weather.current.sunset)   
        
    return (
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid className='middle' item xs={12} md={6}>
                  <div  className='ItemGrid'>
                <h2>{props.location}</h2>
                <h2>{props.getTime(props.weather.current.dt)}</h2>
                </div>
                </Grid>
                <Grid  item xs={12} md={6}>
                  <div className='ItemGrid'>
                  <img className='weatherIcon' src={"http://openweathermap.org/img/wn/" + props.weather.current.weather[0].icon +"@2x.png"} alt="Current Weather" />
                  <br/>
                  <h2>{props.weather.current.weather[0].main}</h2>
                  
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div  className='ItemGrid'>
                    <h2>Current temperature is {props.convertTemp(props.weather.current.temp,"fahrenheit")} Degrees Fahrenheit</h2>  
                    <h2>Feels like {props.convertTemp(props.weather.current.feels_like,"fahrenheit")} Degrees Fahrenheit</h2>  
                    <h2>Sunrise is at {sunrise}</h2> 
                    <h2>Sunset is at {sunset}</h2>   
                    <h2>Humidity is {props.weather.current.humidity}</h2>    
                  </div>
                </Grid>
                
              </Grid>
            </Box>
          );
    }
   
  
}





