var solution = require("./solution");
var performance = require('perf_hooks').performance;

function execute(){

    var t0 = performance.now();

    let result = solution.shapeArea(2);

    var t1 = performance.now();
    var t = t1-t0;
    var msg = "ok!!!";

    if ( result != 5){
        msg = "failed!!!!";
    }
    
    console.log ("test 01 " + msg +  " => " + result + " : " + t +" milliseconds.");
}

exports.execute = execute;