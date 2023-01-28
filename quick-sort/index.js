let countOfSteps = 0

const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const quickSort = (array) => {
  countOfSteps += 1

  if (array.length < 2) return array

  const pivot = array[0]

  let left = []
  let right = []

  for (let i = 1; i < array.length; i++)
    array[i] < pivot ? left.push(array[i]) : right.push(array[i])

  return [...quickSort(left), pivot, ...quickSort(right)]
}

let array = []

for (let i = 0; i < 30; i++) {
  array.push(getRandomArbitrary(0, 100))
}

console.log(array)
console.log(quickSort(array))
console.log("array.length: ", array.length, "\ncount of steps: ", countOfSteps)
