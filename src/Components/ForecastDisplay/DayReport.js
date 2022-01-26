
  import Card from '@material-ui/core/Card';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import CardMedia from '@material-ui/core/CardMedia';
  import Button from '@material-ui/core/Button';
  import Typography from '@material-ui/core/Typography';
  import {Link} from "react-router-dom";
  import Grid from '@mui/material/Grid';

  

  export default function DayReport(props) {
    


    return (



      
  <Grid  item xs={12} md={3} >
      <Card>
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
);

}
