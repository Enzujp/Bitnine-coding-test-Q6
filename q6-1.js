// question 6-1 Solution
function isPalindrome(string){
    //reverse string and store in a variable
    const reverseString = string.split("").reverse().join("");
    //compare value of reversed string with normal string value to check if they are the same.
    // print reverse value if they aren't and log message declaring palindrome if it is!
    if (reverseString === string) {
        console.log("It's a palindrome!");
    } else (console.log(reverseString));
}

//test function
isPalindrome('hello');