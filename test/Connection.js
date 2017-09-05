const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise


before(function(done){

//connect to mongodb
mongoose.connect('mongodb://localhost/testaroo',{useMongoClient: true});

mongoose.connection.once("open",function(){
   console.log("connection made successfully");

   done();
}).on('error',function(){

   console.log("error occured",error);
});

});


//Dropping the collection before each test

beforeEach(function(done){
//Drop the collection
  mongoose.connection.collections.mariochars.drop(function(){
   done();
  });
});

