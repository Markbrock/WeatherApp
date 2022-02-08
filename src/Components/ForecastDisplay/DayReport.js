
  import Card from '@material-ui/core/Card';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import CardMedia from '@material-ui/core/CardMedia';
  import Button from '@material-ui/core/Button';
  import Typography from '@material-ui/core/Typography';
  import {Link} from "react-router-dom";
  import Grid from '@mui/material/Grid';
  import { useState } from 'react';

  

  export default function DayReport(props) {
    /**
     * TODO: expand component on click
     * 
     */
     const [expand,setexpand] = useState(false)


     function checkExpand(){
       if(expand == false){
        setexpand(true)
       } else if (expand == true){
        setexpand(false)
       }
      
     }
     if (expand == false){
        return (



          
            <Grid  item xs={6} md={3} >
            
                <Card onClick={checkExpand}>
                  <CardContent className='hourReport' >


                    <Typography>
                    { props.getDate(props.daily.dt).toDateString()}
                    
                    
                    </Typography>
                    <Typography variant='h5' component="h5">
                    
                    {props.getTime(props.daily.dt)}
                    
                    
                    </Typography>
                    <Typography>
                    temperature during the day is {props.convertTemp(props.daily.temp.day,"fahrenheit")} Fahrenheit
                    
                    </Typography>
                    <Typography className='middle'>
                    <div style={{marginRight: "50px"}}>
                    {props.daily.weather[0].main}</div>
                    <img  src={"http://openweathermap.org/img/wn/" + props.daily.weather[0].icon +"@2x.png"} alt="Daily Weather" />
                    
                    </Typography>

                  </CardContent>


                </Card>
            </Grid>
          )}
      else if (expand == true) 
          {return( <Grid  item xs={12} md={6} >
            
            <Card onClick={checkExpand}>
              <CardContent className='hourReport' >


                <Typography>
                { props.getDate(props.daily.dt).toDateString()}
                
                
                </Typography>
                <Typography variant='h5' component="h5">
                
                {props.getTime(props.daily.dt)}
                
                
                </Typography>
                <div style={{float: "left",display: "inline"}}>
                <Typography>
                temperature during the day is {props.convertTemp(props.daily.temp.day,"fahrenheit")} Degrees Fahrenheit
                <br/>
                temperature during the evening is {props.convertTemp(props.daily.temp.eve,"fahrenheit")} Degrees Fahrenheit
                <br/>
                temperature during the night is {props.convertTemp(props.daily.temp.night,"fahrenheit")} Degrees Fahrenheit
                <br/>
                the sunrise is at {props.getTime(props.daily.sunrise)}
                <br/>
                the sunset is at {props.getTime(props.daily.sunset)}
                <br/>
                the humidity is {props.daily.humidity}
                
                </Typography>
                </div>

                <div style={{marginLeft: "400px", fontSize: "30px",display: "inline"}}>
                    {props.daily.weather[0].main}
                    <img style={{marginLeft: "-70px",marginBottom: "10px"}} src={"http://openweathermap.org/img/wn/" + props.daily.weather[0].icon +"@2x.png"} alt="Daily Weather" />
                </div>

              </CardContent>


            </Card>
            
        </Grid>)
}}
