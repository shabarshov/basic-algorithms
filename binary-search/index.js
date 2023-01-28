const binarySearch = (numbers, number) => {
  let countOfSteps = 0
  let [left, right] = [0, numbers.length]

  while (left <= right) {
    countOfSteps += 1

    const middle = parseInt((left + right) / 2)

    // console.log(left, middle, right)

    if (numbers[middle] > number) {
      right = middle - 1
    } else if (numbers[middle] < number) {
      left = middle + 1
    } else if (numbers[middle] === number) {
      return [middle, countOfSteps]
    } else {
      return null
    }
  }

  return null
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.forEach((number) => {
  console.log("Number:", number)
  console.log(binarySearch(numbers, number), "\n")
})

console.log(binarySearch(numbers, 5), "\n")
