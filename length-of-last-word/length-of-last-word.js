/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let lengthOfLastWord
  const trimmedS = s.trim()
  if (trimmedS.length === 0) lengthOfLastWord = 0
  else if (trimmedS.length === 1) lengthOfLastWord = 1
  else {
    const lastSpaceIndex = trimmedS.lastIndexOf(" ")
    lengthOfLastWord = trimmedS.length - lastSpaceIndex - 1
  }
  return lengthOfLastWord
};