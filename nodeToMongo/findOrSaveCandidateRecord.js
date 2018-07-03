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
app.listen(8081);
console.log('Running');