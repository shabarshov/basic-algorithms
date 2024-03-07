import { expect, it, describe } from "@jest/globals"
import binarySearch from "./index"

describe("binarySearch", () => {
  it("should return the index of the target element if it exists in the array", () => {
    const arr = [1, 2, 3, 4, 5]
    const target = 3
    expect(binarySearch(arr, target)).toBe(2)
  })

  it("should return -1 if the target element does not exist in the array", () => {
    const arr = [1, 2, 3, 4, 5]
    const target = 6
    expect(binarySearch(arr, target)).toBe(-1)
  })

  it("should return -1 for an empty array", () => {
    const arr: number[] = []
    const target = 3
    expect(binarySearch(arr, target)).toBe(-1)
  })

  it("should return the index of the target element if it is the first element in the array", () => {
    const arr = [1, 2, 3, 4, 5]
    const target = 1
    expect(binarySearch(arr, target)).toBe(0)
  })

  it("should return the index of the target element if it is the last element in the array", () => {
    const arr = [1, 2, 3, 4, 5]
    const target = 5
    expect(binarySearch(arr, target)).toBe(4)
  })

  it("should return the index of the target element if it is the only element in the array", () => {
    const arr = [3]
    const target = 3
    expect(binarySearch(arr, target)).toBe(0)
  })
})
