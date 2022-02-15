pragma solidity ^0.5.16;

contract Contest {

struct  Contestant  {
    uint id;
    string name;
    uint voteCount;
}
mapping(uint => Contestant) public contestants;

mapping (address => bool) public voters;

uint public contestantsCount;
constructor() public{
     addContestant("Tom");
    addContestant("Jerry");

}



function addContestant(string memory _name) private {
contestantsCount ++;



contestants[contestantsCount] = Contestant(contestantsCount,_name,0);


}
function vote(uint _contestantId) public {
  
   require(!voters[msg.sender]);
   require(_contestantId > 0 && _contestantId <= contestantsCount);
   
    contestants[_contestantId].voteCount ++;

    voters[msg.sender] = true;

}


}

