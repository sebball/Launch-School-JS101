// Create a function that takes two integers as arguments. The first argument is a count, and 
// the second is the starting number of a sequence that your function will create. 
// The function should return an array containing the same number of elements as the count argument. 
// The value of each element should be a multiple of the starting number.

// You may assume that the count argument will always be an integer greater than or equal to 0. 
// The starting number can be any integer. If the count is 0, the function should return an empty array.


// PEDAC

// Process the problem
// Input: count number, starting  number
// outoutt: array 

// Rules:  If starting number is zero, all further numbers are zeroes
// If count is zero return empty array

// Clarifying questions:
//

// Mental model: 
// Example/Test cases

// Data structures/ Algorithm: count, startNum
// define outputArr as empty array
// iterate through numbers 1 through count inclusive:
//  add iteration number * startNum to outputArr
// return outputArr

// Code

function sequence(count, startNum) {
  let outputArr = [];

  for (let num = 1; num <= count; num += 1) {
    outputArr.push(startNum * num);
  }

  console.log(outputArr);
  return outputArr;
}




Examples:

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
