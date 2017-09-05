const mocha = require('mocha');

const assert = require('assert');
const MarioChar = require('../model/mariochar');

//describe test

describe("some demo tests",function(){

  it("add two numbers",function(done){

    assert(2 + 3 === 5);
    done();
  });

});


describe("Saving Records",function(){

  it("Saving records to the database",function(done){

    var char = new MarioChar({
      name : "Shubham"
    });

    char.save().then(function(){

      assert(char.isNew===false);

    });

    done();
  });

});



describe("Finding Records",function(){


  var foo;
     // Add a character to the db before each tests
     beforeEach(function(done){
       foo = new MarioChar({
         name: 'Mario'
       });
         foo.save().then(function(){
         done();
       });
  });

  it("Finding one records from database",function(done){

    MarioChar.findOne({name:"Shubham"}).then(function(result){
      assert(result.name==="Shubham");
    });
    done();
  });

  it("Finding one records from database by ID",function(done){

    MarioChar.findOne({_id:foo._id}).then(function(result){
      assert(result._id.toString()===foo._id.toString());
    });
    done();
  });
});



describe('Deleting records', function(){

var foo;
     // Add a character to the db before each tests
     beforeEach(function(done){
       foo = new MarioChar({
         name: 'Mario'
       });
         foo.save().then(function(){
         done();
       });
  });

  
  it('Deletes a record from the database', function(done){
    MarioChar.findOneAndRemove({name: 'Shubham'}).then(function(){
      MarioChar.findOne({name: 'Shubham'}).then(function(result){
        assert(result === null);
        done();
      });
    });
  });

});
