const reverse = require("../src/7.整数反转");

function test1(message) {
  console.assert(reverse instanceof Function, message);
}
function test2(message) {
  const result = reverse(0);
  console.assert(result === 0, message);
}
function test3(message) {
  const result = reverse(1234);
  console.assert(result === 4321, message);
}
function test4(message) {
  const result = reverse(-1234);
  console.assert(result === -4321, message);
}
function test5(message) {
  const result = reverse(1534236469);
  console.assert(result === 0, message);
}

test1("reverse is a Function");
test2("input 0, output 0");
test3("input 1234, output 4321");
test4("input -1234, output -4321");
test5("input 1534236469, output 0");
