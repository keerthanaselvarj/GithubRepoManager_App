var express = require('express');
var router = express.Router();

var github=require('../models/github');
router.route("/add")
.post(function(req,res) {
  if(req.body) {
  var githubvar=new github();
  githubvar.id=req.body.id;
  githubvar.name=req.body.name;
  githubvar.full_name=req.body.full_name;
  githubvar.html_url=req.body.html_url;

  githubvar.save(function(err){
  if(err) {
    res.send(err);
    console.log("error occured");
  }
  else  {
  res.send("github added successfully");
  console.log("github added");
  }
    });
  }
  });


  router.route("/delete/:id")
  .delete(function(req,res) {
    var request=req.params.id;
    console.log(request);
    console.log("inside delete");
    if(request)
    {
      github.remove({id:request},function(err){
        if(err) {
          res.send(err);
        }
        else  {
        res.send("repo deleted");
        }
      });
    }
  });




  router.route("/update")
  .put(function(req,res) {

    console.log(req.body);
    if(req.body)
    {

    github.update({id:req.body.id},{$set:{name:req.body.name}},function(err){
  console.log(req.body.id);
   console.log(req.body.name);
        if(err) {
          res.send(err);
        }
        else  {
        res.send("github repo updated");
        }
      });
    }
  });

  /*router.route("/update/:name")
  .put(function(req,res) {
    var request=req.params.name;
    console.log(request);
    if(request)
    {
      github.update({name:"javascript"},function(err){
        if(err) {
          res.send(err);
        }
        else  {
        res.send("  github updated");
        }
      });
    }
  });*/

  router.route("/display")
  .get(function(req,res){
    github.find({},function(err,reposall){
      if(err) {
        res.send(err);
        console.log('error ocuured');
      }
      else {

console.log("all repo get displayed");
console.log(reposall);
        var reposs={};
        reposall.forEach(function(repo){
          reposs[repo._id]=repo;
        });
        res.send(reposs);
      }
    });
});
module.exports = router;
