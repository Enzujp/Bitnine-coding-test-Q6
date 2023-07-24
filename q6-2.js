function findMissingNumber(collection){
    //create a set to store the range of numbers
    const set = new Set();
    // loop through set and populate with range of contents in array
    for (let i=0; i < collection.length; i++);
    set.add(collection[i]);
}

//loop through array containing missing figures and compare values to set contents 
//containing complete numbers and identify missing number(s)

    for (let i = 1; i <= collection.length + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
    }

var testarray = [1, 2, 3, 4, 5, 7, 8, 9];

findMissingNumber(testarray);
