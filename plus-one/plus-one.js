/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  const newDigits = BigInt(digits.join(""))
  const newNumber = newDigits + 1n
  const newArray = Array.from(newNumber.toString(), Number)

  return newArray
}