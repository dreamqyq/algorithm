const addStrings = require("../src/415.字符串相加");

function test1(message) {
  console.assert(addStrings instanceof Function, message);
}
function test2(message) {
  const result = addStrings("123", "456");
  console.assert(result === "579", message);
}
function test3(message) {
  const result = addStrings("123", "477");
  console.assert(result === "600", message);
}

test1("addStrings is a Function");
test2("input '123','456', output '579'");
test3("input '123','477', output '600'");
