function checkPalindrome(inputString) {
    let start = 0;
    let end = inputString.length;
    let isPalindrome = true;
    
    for (; start < inputString.length && isPalindrome == true && start <= end ; start++ ){
        if (inputString[start] != inputString[end-1]){
            isPalindrome = false;
        }
        end-=1;
    }
            
    return isPalindrome;
}

exports.checkPalindrome = checkPalindrome;