var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Weather App</li>
                    <li> <IndexLink to="/" activeclassName="active" activeStyle={{ fontWeight: 'bold' }}>GetWeather</IndexLink> </li>
                    <li><Link to="/About" activeclassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link></li>
                    <li><Link to="/Examples" activeclassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li><input type="search" placeholder="Search"></input></li>
                    <li><button type="button" className="button">Search</button></li>
                </ul>
            </div>
        </div>

    );
}


module.exports = Nav;
