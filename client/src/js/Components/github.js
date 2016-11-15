var React = require('react');
var github = React.createClass({


  handleAddRepo: function()
   {
     var repoSave=this.props.myGithub;
     console.log(JSON.stringify(repoSave));
     console.log("added clicked");
     $.ajax({
     url:"http://localhost:8080/github/add",
     type: 'POST',

     data: repoSave,
     success: function(msg)
     {
       console.log("inside success");
       alert(msg);
     }.bind(this),
     error: function(err)
     {

       console.log(err);
     }.bind(this)
   });



  },




render : function()
{
  return (
      <div className="movie">
          <div className="well">
              <div className="row">
                    <div className="col-sm-12">
                       <h3 id="title"><b>{this.props.myGithub.full_name}</b></h3>
                       <ul className='list-group' >
                           <li className='list-group-item'>full_name : {this.props.myGithub.full_name}</li>
                           <li className='list-group-item'> Id : {this.props.myGithub.id}</li>
                           <li className='list-group-item'>name : {this.props.myGithub.name}</li>
                           <li className='list-group-item'>html_url : {this.props.myGithub.html_url}</li>


                       </ul>

                       <button className="btn btn-success"  id="save_button" onClick={this.handleAddRepo}>Save</button>
                   </div>
               </div>
           </div>
 </div>

);
}

});

module.exports=github;
