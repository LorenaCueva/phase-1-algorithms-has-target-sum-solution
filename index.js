// function hasTargetSum(array, target) {
//   for(let i = 0; i < array.length; i++){
//     for(let j = i + 1; j < array.length; j++ ){
//       if (target - array[i]  === array[j]) return true
//     }
//   }
//     return false
// }

function hasTargetSum(array, target){
  const seenNumbers = {};
  for(const number of array){
    const complement = target - number;
    if(complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  
  Option 1:

  Runtime: O(n^2)
  Space: O(n)

  Option 2:

  Runtime: O(n) 
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  if (require.main === module) {
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
  
    console.log("");
  
    console.log("");
    // Negative numbers?
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  
    console.log("");
    // Multiple pairs?
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  
    console.log("");
    // Single numbers?
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([4], 4));
  }
}

module.exports = hasTargetSum;
