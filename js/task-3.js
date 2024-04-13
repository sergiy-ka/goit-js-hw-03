/**
 * Get filtered array of numbers
 * @param {Array} numbers - array of numbers
 * @param {number} value - number to filter
 * @returns {Array} filtered array of numbers
 */
function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (let item of numbers) {
    if (item > value) {
      filteredNumbers.push(item);
    }
  }
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
