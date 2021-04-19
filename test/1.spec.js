const twoSum = require("../src/1.两数之和");

function test1(message) {
  console.assert(twoSum instanceof Function, message);
}

function test2(message) {
  const result = twoSum([1, 2, 3, 4], 6);
  console.assert(result[0] === 1, message);
  console.assert(result[1] === 3, message);
}

function test3(message) {
  const result = twoSum([1,3,3,4], 6);
  console.assert(result[0] === 1, message);
  console.assert(result[1] === 2, message);
}

test1("twoSum is a Function");
test2("input [1,2,3,4], output [1,3]")
test3("input [1,3,3,5], output [1,2]")
