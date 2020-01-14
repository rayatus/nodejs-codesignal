var solution = require("./solution");

function execute(){
    
    if (solution.adjacentElementsProduct([3, 6, -2, -5, 7, 3]) != 21){
       console.log ("test 01 failed!!!!");       
    };
    
}

exports.execute = execute;