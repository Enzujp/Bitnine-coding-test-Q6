// question 6-1 Solution
function isPalindrome(string) {
    // find the length of the string. 
    const len = string.length;
    // run a for loop through the first half of string input
    for (let i=0; i=len/2; i++) {
        //compare first half of string with last half
        if (string[i] !== string[len - 1 - i]) {
            reverseString(string);
        } 
            else if (string.length < 2){
                console.log("enter a string that is at least two digits")
            } else (console.log("It's a palindrome "))
        }
}

function reverseString(string) {
    // using the split(),reverse(), and join() builtin functions 
    const reverse  = string.split("").reverse().join("");
    console.log(reverse);

}


