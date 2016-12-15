var React = require('react');


    

var WeatherMessage = ({temp , location}) => {
    if(location == 'Tharwat' || location =='tharwat'){
        temp = 'very high in Teez Ahmed Tharwat';
    }
 return(<h1>Temperture is {temp} ⁰C in {location} </h1>);
};

module.exports = WeatherMessage;