var solution = require("./solution");
var performance = require('perf_hooks').performance;

function execute(){

    var t0 = performance.now();

    let result = solution.execute([0, -2, 5, 6]);

    var t1 = performance.now();
    var t = t1-t0;
    var msg = "ok!!!";

    if ( result != true){
        msg = "failed!!!!";
    }
    
    console.log ("test 09 " + msg +  " => " + result + " : " + t +" milliseconds.");
}

exports.execute = execute;