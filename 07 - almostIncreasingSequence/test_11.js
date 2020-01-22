var solution = require("./solution");
var performance = require('perf_hooks').performance;

function execute(){

    var t0 = performance.now();

    let result = solution.execute([40, 50, 60, 10, 20, 30]);

    var t1 = performance.now();
    var t = t1-t0;
    var msg = "ok!!!";

    if ( result != false){
        msg = "failed!!!!";
    }
    
    console.log ("test 11 " + msg +  " => " + result + " : " + t +" milliseconds.");
}

exports.execute = execute;