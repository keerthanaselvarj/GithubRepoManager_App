
var React = require('react');

var SavedRepo= React.createClass({
  getInitialState: function()
  {
    return {name:''};
  },
  updateTitle: function(t)
    {
      console.log('typing...');
      this.setState({name: t.target.value});
    },
    updateClick: function()
    {

        var repoObject = {};
        repoObject.name= this.state.name;
        repoObject.id= this.props.myGithub.id;
        console.log(repoObject);
        $.ajax({
         url:"http://localhost:8080/github/update",
         type: 'PUT',
         data: repoObject,
         success: function(message)
         {
           console.log("repo updated");
           this.props.onupdate(repoObject.id, repoObject.name);
         }.bind(this),
         error: function(err)
         {
           console.log(err);
         }.bind(this)
       });
    },
  deleteRepo : function()
  {
    console.log("deleted");
    var del=this.props.myGithub.id;
    $.ajax({
     url:"http://localhost:8080/github/delete/"+del,
     type: 'DELETE',
     success: function(message)
     {
       this.props.ondelete(this.props.myGithub);
     }.bind(this),
     error: function(err)
     {
       console.log(err);
     }.bind(this)
   });

  },
  render : function()
  {
    var id="#"+this.props.myGithub.id;
  return (
     <div className="repo">
             <h2 className="repoName"> </h2>
             <div className="well">
                 <div className="row">

                       <div className="col-sm-8">
                           <h4>{this.props.myGithub.full_name}</h4>
                           <ul className='list-group'>
                               <li className='list-group-item'>name : {this.props.myGithub.name}</li>
                               <li className='list-group-item'>id : {this.props.myGithub.id}</li>
                                  <li className='list-group-item'>html_url : {this.props.myGithub.html_url}</li>
                           </ul>
                           <a href={id}  role="button" className="btn btn-warning" data-toggle="modal"> Update</a>
                           <div className="modal fade" id={this.props.myGithub.id}>
                               <div className="modal-dialog">
                                   <div className="modal-content">
                                       <div className="modal-header">
                                           <button className="close" data-dismiss="modal">&times;</button>
                                           <h4 className="modal-title">Update</h4>
                                       </div>
                                       <div className="modal-body">
                                           <form className="form-horizontal">
                                                                      <div className="form-group">
                                                                          <label className="col-lg-2 control-label" for="inputName">Name</label>
                                                                          <div className="col-lg-10">
                                                                              <input className="form-control" id="inputName" placeholder="Title Name" onChange={this.updateTitle} type="text"/>
                                                                          </div>
                                                                      </div>
                                                                  </form>
                                       </div>
                                       <div className="modal-footer">
                                           <button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
                                           <button className="btn btn-success" type="button" onClick={this.updateClick}>Save</button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <button className="btn btn-success" onClick={this.deleteRepo}>Delete</button>
                       </div>
                 </div>
             </div>
         </div>
   );
  }

  });

module.exports = SavedRepo;
