function hasTargetSum(array, target) {

  const seenNumbers = {}

  for (const number of array) {

    const complement = target - number

    if (seenNumbers[complement]) return true

    seenNumbers[number] = true

  }

  return false

}

/* 
  BIG O TIME COMPLEXITY
  1 step = create array
  n steps = iterate through array
  1 step = return false
   => 0(n) time complexity
*/

/* 
  Submitted psuedocode as part of assignment
  Copied solution from module into index.js and ran tests to confirm accuracy
*/

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
