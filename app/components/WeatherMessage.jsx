var React=require('react');
var Weather=require('Weather');

var WeatherMessage=(props)=>{
    return(
      <h3 className="text-center">it is {props.temp} in {props.location}</h3>
    );
}


module.exports=WeatherMessage;
