function isPalindrome(s) {

  console.log("S INITIALLY: " + s);
  s = s.split(" ").join("");
  var stringReverse = s.split("").reverse().join("");
  return s === stringReverse;
}
module.exports = isPalindrome;


// function isPalindrome(s) {
//   var stringReverse = s.split("").reverse().join("");
//   return s == stringReverse;
// }

// module.exports = isPalindrome;