function makeArrayConsecutive2(statues) {
    let missingStatues = 0;

    //Sorting array as integers
    statues.sort((a, b) => a - b)
    //Check how many nummbers are missing between 
    //existing minimum and maximum values in array
    let from = statues[0];
    let to   = statues[statues.length - 1];
    
    for (i=from+1; i <= to-1 ; i++){
        if (!statues.includes(i)){
            missingStatues += 1;
        }
    }

    return missingStatues;
                
}

exports.execute = makeArrayConsecutive2;