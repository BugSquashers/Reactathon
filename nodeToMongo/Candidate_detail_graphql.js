var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
var mongoose = require('mongoose');
const { makeExecutableSchema } = require('graphql-tools')
const Schema = mongoose.Schema;


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

},{collection: 'Candidate_Details'});

var candidate_detail= mongoose.model("Candidate",candidateSchema) ;


const typeDefs = 
`type Candidate {
  _id: String
  naee: String
  email: String
 
}
type Query {
  candidate(email: String): Candidate
  candidates: [Candidate]
}`


const resolvers = {
  Query: {
    candidate: async (email) => {
      return (await candidate_detail.findOne(email))
    },
    candidates: async () => {
      return (await candidate_detail.find({}))
    },
  },
}


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
  schema,
  pretty: true,
  graphiql: true
}));

mongoose.connect('mongodb://localhost:27017/jobsDB')
var db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
 console.log( '+++Connected to mongoose')
})
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));