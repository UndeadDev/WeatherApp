var React = require('react');



var WeatherMessage = ({temp , location}) => {
 return(<h4>Temperture is {temp} ⁰C in {location} </h4>);
};

module.exports = WeatherMessage;