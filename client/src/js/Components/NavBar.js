var React = require('react');
var {Link} = require('react-router');
var NavBar = React.createClass({
  render: function(){
    return(
      <div className="container-navbar">
      <ul className="nav navbar-nav">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/saveView">Saved Repos</Link></li>
      </ul>
      </div>
    );
  }
});

module.exports=NavBar;
