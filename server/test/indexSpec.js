var should = require("chai").should(),
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing 1st route", function(err){
  it("Retrive the data", function(done){
    url
        .get("/github/display")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);

    var result=Object.keys(myObj).map(function(key)
     {
       return myObj[key];
     });


         result[0].name.should.be.equal("new");


          done();
        });

  });
});
describe("Testing 2nd route", function(err){
  it("Post the data", function(done){
    url
        .post("/github/add")
        .send( {
     "id": 27193800,
      "name": "angularjs",
      "full_name": "angularjs/node",
  "html_url": "https://github.com/angularjs"
    })
        .expect(200)

        .end(function(err,res){

       res.text.should.equal("github added successfully");
done();
        });

  });
});
describe("Testing 3rd route", function(err){
  it("delete the data", function(done){
    url
        .del("/github/delete/71628260")

       .expect(200)

      .end(function(err,res){

       res.text.should.equal("repo deleted");
       done();
        });

  });
});
describe("Testing 4th route", function(err){
  it("update the data", function(done){
    url
        .put("/github/update")
        .send({"name":"react","id":"12488647"})
       .expect(200)

      .end(function(err,res){

       res.text.should.equal("github repo updated");
       done();
        });

  });
});
