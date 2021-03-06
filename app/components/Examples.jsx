var React = require('react');
var {Link} = require('react-router');

var Examples = (prop) => {
    return (
        <div>
            <h1 className="text-centred">Examples</h1>
            <p> Here are a few examples locations to try out : </p>

            <ol>
                <li>
                    <Link to="/?location">Cairo , EG</Link>
                </li>
                <li>
                    <Link to="/?location">Wroclaw , PL</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;