function findMissing(arr,N){
    let i;
    // create an empty array
    var temp = [];
    // set all initial values to zero
    for (i = 0; i <= N; i++) {
              temp[i] = 0;
          }
    // loop through and assign a value of 1 to every present element in the loop
          for (i = 0; i < N; i++) {
              temp[arr[i] - 1] = 1;
          }
    // then search through temp and find whatever value has a zero, and this is the missing element
          let ans = 0;
          for (i = 0; i <= N; i++) {
              if (temp[i] == 0)
                  ans = i + 1;
          }
          console.log(ans);
  }

// testing out code
var arr = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45]
  
var n = arr.length;

findMissing(arr, n)