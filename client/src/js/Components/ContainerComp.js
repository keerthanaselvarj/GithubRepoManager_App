var React = require('react');
var Github=require('./Github.js');

var ContainerComp = React.createClass({

 render: function (){
   var gArr=this.props.MyGithubArr.map(function(githubElement){
     return(
            <Github myGithub={githubElement}
            key={githubElement.id}>
            </Github>
     )
   })



   return(
    <div>
      {gArr}
    </div>
   )

 }
})
module.exports=ContainerComp;
