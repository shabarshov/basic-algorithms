const binarySearch = (numbers, number) => {
  let countOfSteps = 0
  let [left, right] = [0, numbers.length]

  while (left <= right) {
    countOfSteps += 1

    const index = parseInt((left + right) / 2)

    // console.log(left, index, right)

    if (numbers[index] > number) {
      right = index - 1
    } else if (numbers[index] < number) {
      left = index + 1
    } else if (numbers[index] === number) {
      return [index, countOfSteps]
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
