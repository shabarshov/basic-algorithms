const binarySearch = (arr: number[], target: number): number => {
  let [left, right] = [0, arr.length - 1]

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    if (arr[middle] > target) {
      right = middle - 1
    } else if (arr[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }

  return -1
}

export default binarySearch
