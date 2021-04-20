const isPalindrome = require("../src/9.回文数");

function test1(message) {
  console.assert(isPalindrome instanceof Function, message);
}
function test2(message) {
  const result = isPalindrome(121);
  console.assert(result === true, message);
}
function test3(message) {
  const result = isPalindrome(-121);
  console.assert(result === false, message);
}
function test4(message) {
  const result = isPalindrome(10);
  console.assert(result === false, message);
}
function test5(message) {
  const result = isPalindrome(0);
  console.assert(result === true, message);
}
function test6(message) {
  const result = isPalindrome(11);
  console.assert(result === true, message);
}

test1("isPalindrome is a Function");
test2("121 is palindrome");
test3("-121 is not palindrome");
test4("10 is not palindrome");
test5("0 is palindrome");
test6("11 is palindrome");
