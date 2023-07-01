/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
 
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b))
}

let arr = [1, 2, 3]
let fn = (item) => item

console.log(sortBy(arr, fn))

arr = [{ g: 6 }, { x: 1 }, { y: 3 }]
fn = (item) => Object.values(item)[0]

console.log(sortBy(arr, fn))
