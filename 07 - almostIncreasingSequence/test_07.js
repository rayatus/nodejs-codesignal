var solution = require("./solution");
var performance = require('perf_hooks').performance;

function execute(){

    var t0 = performance.now();

    let result = solution.execute([10, 1, 2, 3, 4, 5]);

    var t1 = performance.now();
    var t = t1-t0;
    var msg = "ok!!!";

    if ( result != true){
        msg = "failed!!!!";
    }
    
    console.log ("test 07 " + msg +  " => " + result + " : " + t +" milliseconds.");
}

exports.execute = execute;