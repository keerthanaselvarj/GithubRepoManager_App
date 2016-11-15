var React = require('react');

var SearchComp = React.createClass({

  getInitialState: function()
  {
    return {technology:''},{userName:''};
  },

  handleTechnology: function(t)
  {
    console.log('typing...');
    this.setState({technology: t.target.value});
  },

  SearchTechnology: function(technology){
    console.log("Technology " + this.state.technology);
    this.props.FunctionForChild(this.state.technology);
  },

  handleUserName: function(t)
  {
    console.log('typing...');
    this.setState({userName: t.target.value});
  },

  SearchUserName: function(){
    console.log("userName " + this.state.userName);
    this.props.FunctionForUser(this.state.userName);
  },

  myCheckBox: function(){
    if(document.getElementById("mycheck1").checked){
      document.getElementById("check1").style.display="block";
      document.getElementById("check2").style.display="none";
    }
  else if(document.getElementById("mycheck2").checked){
      document.getElementById("check2").style.display="block";
      document.getElementById("check1").style.display="none";
    }
  },

 render: function (){
   return(
    <div className="form-group">
      Technology : <input type="radio" name="git" id="mycheck1" onClick={this.myCheckBox}></input><br></br>
      User Name : <input type="radio" name="git" id="mycheck2" onClick={this.myCheckBox}></input>
      <div id="check1" className="check1">
        <input type="text" placeholder="Search by technology.." onChange={this.handleTechnology}></input>
        <button className="btn btn-success" onClick={this.SearchTechnology}>Search</button>
      </div>
      <div id="check2" className="check2">
        <input type="text" placeholder="Search by User Name.." onChange={this.handleUserName}></input>
        <button className="btn btn-success" onClick={this.SearchUserName}>Search</button>
        </div>
    </div>
   )

 }
});
module.exports=SearchComp;
