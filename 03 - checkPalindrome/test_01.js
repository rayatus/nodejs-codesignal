var solution = require("./solution");

function execute(){
    
    if (solution.checkPalindrome("aabaa") != true){
       console.log ("test 01 failed!!!!");       
    };
    
}

exports.execute = execute;