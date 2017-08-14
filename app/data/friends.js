// Array thet holds all of the friends who have taken the survey
// Initialize with my data
//============================================================================

var friendList = [{
    name: "Sheila",
    photo: "https://github.com/sheilamanderson637",
    scores: "[ 5,4,4,5,3,3,4,4,2,3 ]" 
}, { 
    name: "Homer Simpson",
    photo: "http://madbetty.com/wp-content/uploads/2013/11/homer-simpson.jpg",
    scores: "[ 5,1,5,5,5,1,1,1,5,3 ]"  
}];

// console.log(friendList);

// Set up table to be accessible to other files 
//======================================================================
module.exports = friendList;
