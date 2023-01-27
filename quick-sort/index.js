let countOfSteps = 0

const quickSort = (array) => {
  countOfSteps += 1

  if (array.length < 2) return array

  const main = array[0]

  let left = []
  let right = []

  for (let i = 1; i < array.length; i++)
    array[i] < main ? left.push(array[i]) : right.push(array[i])

  return [...quickSort(left), main, ...quickSort(right)]
}

const array = [
  2, 1, 5, 3, 4, 5, 4, 40, 6, 7, 1, 2, 9, 5, 2, 1, 0, 4, 2, 7, 8, 14, 51, 11,
]

console.log(quickSort(array))
console.log("array.length: ", array.length, "\ncount of steps: ", countOfSteps)
