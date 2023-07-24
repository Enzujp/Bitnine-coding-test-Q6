function findMissingNumber(arr){
    //create a set to store the range of numbers
    const set = new Set();
    // loop through set and populate with range of contents in array
    for (let i=0; i < arr.length; i++);
    set.add(arr[i]);
}

//loop through array containing missing figures and compare values to set contents 
//containing complete numbers and identify missing number(s)

    for (let i = 1; i <= arr.length + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
    }

var arr = [1, 2, 3, 4, 5, 7, 8, 9];

findMissingNumber(arr);
