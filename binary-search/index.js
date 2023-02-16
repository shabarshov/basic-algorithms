const binarySearch = (numbers, number) => {
  let [left, right] = [0, numbers.length - 1]

  while (left <= right) {
    const middle = parseInt((left + right) / 2)

    if (numbers[middle] > number) {
      right = middle - 1
    } else if (numbers[middle] < number) {
      left = middle + 1
    } else {
      return middle
    }
  }

  return null
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(binarySearch(numbers, 10))
console.log(binarySearch(numbers, -1))
console.log(binarySearch(numbers, 3.5))
console.log(binarySearch(numbers, 8))
