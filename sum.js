// 1. Identify Input(s)
// 2. Identify Output / Edge-cases
// 3. Processing Step

/**
 * sum of CLI numbers provided by user
 * 
 * @param {Array<number>} numbers Array of numbers from CLI
 * @return {number} Sum of all provided numbers
 */

function sum(numbers) {
  let sum = 0;

  //make sure there are at least 2 numbers
  if (numbers.length < 2) {
    return console.log("needs to be at least 2 numbers");
  }


  // CLI numbers ...


  // loop through numbers 
  // make sure it is a whole number
  // add numbers to the sum total


  return sum;
}

console.log(sum([1])); // shows error
console.log(sum([1, 2, 3])); // 6