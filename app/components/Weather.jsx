var React=require('react');
var Form=require('Form');
var WeatherMessage=require('WeatherMessage');
var OpenWeatherMap=require('OpenWeatherMap');
var Errormodal=require('Errormodal');
var Weather=React.createClass({
  getInitialState:function(){
    return{
    isLoading:false
    }
  },
  handleSearch:function(location){
      var that=this;
      this.setState({
        isLoading:true,
        errormessage:undefined,
        location:undefined,
        temp:undefined
      })
    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    },function(e){
      that.setState({
        isLoading:false,
        errormessage:e.message
      });
    });
  },
  componentDidMount:function(){
    var location=this.props.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash="#/"
    }
  },
  componentWillReceiveProps:function(newProps){
    var location=newProps.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash="#/"
    }
  },
  render:function () {
    var {location,temp,isLoading,errormessage}=this.state;
    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching...</h3>
      }else if(temp&&location){
      return  <WeatherMessage location={location} temp={temp}/>
      }
    }
    function renderError(){
      if(typeof errormessage==='string'){
      return <Errormodal errormessage={errormessage}/>
      }
    }
    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <Form onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>


    );
  }
});
module.exports=Weather;
