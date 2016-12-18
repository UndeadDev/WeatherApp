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
            </div>
        </div>

    );
}


module.exports = Nav;
var old = (
    <div>
        <ul className="menu align-right">
            <li className="menu-text">React Weather App</li>
            
        </ul>
    </div>
)