var solution = require("./solution");
var performance = require('perf_hooks').performance;

function execute(){

    var t0 = performance.now();

    let result = solution.execute([1, 2, 1, 2]);

    var t1 = performance.now();
    var t = t1-t0;
    var msg = "ok!!!";

    if ( result != false){
        msg = "failed!!!!";
    }
    
    console.log ("test 03 " + msg +  " => " + result + " : " + t +" milliseconds.");
}

exports.execute = execute;