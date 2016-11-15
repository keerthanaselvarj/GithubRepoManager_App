var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var githubSchema=new Schema({
	id:String,
  name:String,
  full_name:String,
  html_url:String
})
module.exports=mongoose.model('githubdetails', githubSchema);
