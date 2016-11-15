var React = require('react');
var {Link} = require('react-router');
var SearchComp=require('./SearchComp.js');
var ContainerComp=require('./ContainerComp.js');

var Home = React.createClass({

  getInitialState: function()
  {
    return {data: []};
  },

  retriveData:function(technology){
  //  console.log(userName);
          console.log(technology);
          $.ajax({
            url:"https://api.github.com/search/repositories?q=Node+language:"+technology+"&sort=stars&order=desc",
            type: 'GET',
            dataType: 'JSON',

            success: function(data)
            {
              console.log('inside success1');
              this.setState({data: data.items});
              console.log(JSON.stringify(this.state.data));
            }.bind(this),
            error: function(err)
            {
              console.log(err);
            }.bind(this)
          });
        },

    retriveUser:function(userName){
          console.log(userName);
          $.ajax({
            url:"https://api.github.com/users/"+userName+"/repos",
            type: 'GET',
            dataType: 'JSON',

            success: function(data)
            {
              console.log('inside success1');
              this.setState({data: data});
              console.log(JSON.stringify(this.state.data));
            }.bind(this),
            error: function(err)
            {
              console.log(err);
            }.bind(this)
          });
  },

  render: function(){
    return(
      <div>
        <SearchComp FunctionForChild={this.retriveData} FunctionForUser={this.retriveUser}/>
        <ContainerComp MyGithubArr={this.state.data}/>
      </div>
    );
  }
});
module.exports=Home;
