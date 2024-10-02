function hasTargetSum(array, target) {
  // Write your algorithm here
  // look through each number in the array
  for (let i=0; i < array.length; i++) {
    // look through the rest of the numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      //add the 1st array as i and the 2nd array as j then check if it the same as the target
      if ((array[i] + array[j]) === target) {
        return true;
      } 
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/ //O(n^2)

/* 
  Add your pseudocode here
*/
//function hasTargetSum(array, target); {}
  //for (let i = 0; i < array.length; i++) {
    //for (let j = i + 1; j < array.length; j++) {
    //} if ((array[i] + array[j]) === target) {
    //  } return true;   
    //}
  //}

/*
  Add written explanation of your solution here
*/
//Function has two parameters. The 1st parameter is an array of integers, the 2nd parameter is an integer.
//Looping through the array, if the value of two of the integers in the array would equal to the 2nd parameter, it should return true.
//If none, it should return false.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
