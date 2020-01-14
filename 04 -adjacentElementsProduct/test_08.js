
var solution = require("./solution");

function execute(){
    result = solution.adjacentElementsProduct([-23, 4, -3, 8, -12]);
    if ( result != -12){
       console.log ("test 08 failed!!!! => " + result );       
    };
    
}

exports.execute = execute;