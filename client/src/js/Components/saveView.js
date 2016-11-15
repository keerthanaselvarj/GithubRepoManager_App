var React = require('react');
var SavedRepo = require('./SavedRepo.js');
var saveView = React.createClass({
  getInitialState: function()
  {
     return {data: []};
  },
  handleviewRepo: function()
  {
console.log("inside saveView");
    $.ajax({
     url:"http://localhost:8080/github/display",
     type: 'GET',
     dataType: 'JSON',
     success: function(message)
     {
          console.log("inside success");
         this.setState({data:Object.values(message)});
     }.bind(this),
     error: function(err)
     {
       console.log(err);
     }.bind(this)
   });
},

handleUpdate:function(id,Name){
 var repoData=this.state.data;
 var index=repoData.findIndex(function(element){
   return element.id===id;
 });
 if(index!==-1){
   repoData[index].name=Name;
   this.setState({data:repoData});
 }
},
handleDelete:function(allContent){
 console.log(allContent);
 var repoData1=this.state.data;
 var index=repoData1.findIndex(function(element){
   return element.id===allContent.id;
 });
 console.log(index);
 if(index!==-1){
   repoData1.splice(index,1);
   this.setState({data:repoData1});
 }
 },

componentDidMount:function(){
  console.log("hello");
  this.handleviewRepo();
},



  render: function(){

var viewComponents = this.state.data.map(function(view){
  return (

           <SavedRepo
                myGithub={view}
                key={view.id}
                onupdate={this.handleUpdate}
                   ondelete={this.handleDelete}

             >
             </SavedRepo>
        );
    }.bind(this));

  return(
    <div className="repoList">
    {viewComponents}
    </div>
  );
  }
});
module.exports=saveView;
