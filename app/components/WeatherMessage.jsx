var React = require('react');


    

var WeatherMessage = ({temp , location}) => {
 return(<h1>Temperture is {temp} ⁰C in {location} </h1>);
};

module.exports = WeatherMessage;