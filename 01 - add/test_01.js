var solution = require("./solution");

function execute(){
    
    if (solution.add(1,2) != 3){
       console.log ("test 01 failed!!!!");       
    };
    
}

exports.execute = execute;