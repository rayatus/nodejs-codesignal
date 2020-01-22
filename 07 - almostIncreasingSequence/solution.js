function almostIncreasingSequence(sequence) {
    let alreadyRemovedElements = 0;
    let elementToRemove = null;
    
    //Move fordward in order to check A < B < C
    //removing error elements at the end of the loop
    //so that removing elements doesn't affect current index I
    for (i=0; i < sequence.length-1 ;i++){
        if (sequence[i] >= sequence[i+1] ){
            if (( i+2 <= sequence.length-1 ) && (sequence[i] >= sequence[i+2])){
                elementToRemove = i;
            }else{
                elementToRemove = i+1;
            }
            alreadyRemovedElements++;
        }

        if (alreadyRemovedElements > 1){
            return false;
        }
    }

    //Let's remove bad elements so that while moving
    //backwards we do not double check the same bad elements
    if (elementToRemove != null){
        sequence.splice(elementToRemove,1);
    }

    //Move backwards in order to check A < B < C
    //removing error elements at the end of the loop
    //so that removing elements doesn't affect current index I
    for (i=sequence.length-1; i > 0 ;i--){
        if (sequence[i] <= sequence[i-1] ){            
            alreadyRemovedElements++;
        }

        if (alreadyRemovedElements > 1){
            return false;
        }
    }

    return true;
}


exports.execute = almostIncreasingSequence;