var Contest = artifacts.require("./Contest.sol");
contract("Contest" , function(accounts){
it("initializes with two contestants",function(){
    return Contest.deployed().then(function (instance){
        return instance.contestantsCount();
    }).then(function(count){
    assert.equal(count,2);
    });
});
});

it("allows the voter to caste the vote " , function(){

    return Contest.deployed().then(function(instance){
      contestInstance  = instance;
      contestId = 1 ; 
      return contestInstance.vote(contestId , {from: accounts[0]});
    }).then(function(receipt){
      return contestInstance.voters(accounts[0]);
    }).then(function(voted){
      assert(voted , "voters was as marked as voted");
      return contestInstance.contestants(contestantId);
    }).then(function(contestant){
      var voteCount = contestant[1];
      assert.equal(voteCount , 1 , "increments the contestants vote count");
   
    });
  
  });


it("it initialiazes the contestants with the correct values",function(){
return Contest.deployed().then(function(instance){

    contestInstance = instance;
    return contestInstance.contestants(1);

}).then(function(contestant){
    assert.equal(contestant[0],1,"contains the correct id");
    assert.equal(contestant[1],"Tom","Contains the correct name");
    assert.equal(contestant[2],0 , "contains the correct values");
    return contestInstance.contestants(2);
}).then(function(contestant){
    assert.equal(contestant[0],2,"contains the correct id");
    assert.equal(contestant[1],"Jerry","Contains the correct name");
    assert.equal(contestant[2],0 , "contains the correct values");
    // return contestInstance.contestants(2);

});



});




