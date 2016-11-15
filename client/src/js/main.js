var React=require('react');
var ReactDOM=require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var NavBar = require('./Components/NavBar');
var Home = require('./Components/Home');
var SavedRepo = require('./Components/saveView.js');


var MainComponent=React.createClass({
  render:function(){
    return(
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" components={MainComponent}>
    <Route path="/home" components={Home}/>
    <Route path="/saveView" components={SavedRepo}/>
    </Route>
  </Router>,
document.getElementById('app'));
