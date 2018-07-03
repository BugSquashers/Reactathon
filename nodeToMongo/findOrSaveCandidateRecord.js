// we create 'users' collection in newdb database
var url = "mongodb://localhost:27017/jobsDB";
var mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect(url);
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
var bodyParser= require('body-parser');
var express = require('express');
var app = express();
 var candidateSchema = new mongoose.Schema({
	fullName:String,
	age:String,
	candidateId:String,
	qualification:String,
	skills:String,
	experience:String,
	jobId:String,
	address:String,
	email:String,
	mobileNo:String

},{collection: 'Candidate_Details'},{versionKey:false});

var jobDetailsSchema = new mongoose.Schema({
	jobId:String,
	coreSkils:String,
	position:String,
	location:String,
	noOfOpenings:String

},{collection: 'jobDetails'},{versionKey:false});

var Candidate = mongoose.model("Candidate",candidateSchema) ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/saveCandidateDetails', function (req, res) {
var cadidate = new Candidate(req.body);  
Candidate.findOneAndUpdate({email:req.body.email},cadidate ,{upsert:true,new:true},function(err,doc){
 if (err){ 
         console.error(err);
res.send(err);
      } else {
        console.log("Inserted/Updated  to Candidate_Details");
res.send("Success");
      }
});

});

app.post('/getCandidateDetails', function (req, res) {
var cadidate = new Candidate(req.body);  
Candidate.find({email:req.body.email},function(err,doc){
 if (err){ 
         console.error(err);
res.send(err);
      } else {
        console.log("get Candidate details success");
res.send(doc);
      }
});

});


 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 


app.get('/findJobDetails', function (req, res) {
   

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
     var dbo=db.db("jobsDB");
var query = { jobId : req.param("jobId")};
  dbo.collection("jobDetails").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
res.end( JSON.stringify(result));
    db.close();
  });
console.log("Switched to "+dbo.databaseName+" database");
    // create 'users' collection in newdb database
// insert document to 'users' collection using insertOne
   
});

      
});


app.get('/listJobDetails', function (req, res) {
   

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
     var dbo=db.db("jobsDB");

  dbo.collection("jobDetails").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
res.end( JSON.stringify(result));
    db.close();
  });
console.log("Switched to "+dbo.databaseName+" database");
    // create 'users' collection in newdb database
// insert document to 'users' collection using insertOne
   
});

      
});

var SearchJobsDetails = mongoose.model("searchJobs",jobDetailsSchema) ;

app.post('/searchJobsDetails', function (req, res) {
var searchCriteria = new SearchJobsDetails(req.body); 
 console.log("-------AAA" + req.body.coreSkils);
SearchJobsDetails.find({coreSkils:'Java'},function(err,doc){
 if (err){ 
         console.error(err);
res.send(err);
      } else {
        console.log("Search Success");
		res.send(doc);
      }
});

});
app.listen(8081);
console.log('Running');