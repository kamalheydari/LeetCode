/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var ltr = x.toString()
  var rtl = [...x.toString()].reverse().join("")
  return ltr === rtl

};