var solution = require("./solution");

function execute(){
    let result = solution.adjacentElementsProduct([3, 6, -2, -5, 7, 3]);
    if ( result != 21){
       console.log ("test 01 failed!!!! => " + result );       
    };
    
}

exports.execute = execute;