# Binary Search

Average: O(log n)
![Binary Search GIF](https://upload.wikimedia.org/wikipedia/commons/c/c1/Binary-search-work.gif)

## Algorithm

> Binary search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half.

© [**Wikipedia**](https://en.wikipedia.org/wiki/Binary_search_algorithm)

#### Steps:

1.  ##### Set left and right

    No comments

    ***

        let [left, right] = [0, numbers.length - 1]

    ***

2.  ##### Decrease Range

    We must determine which part of our sorted array does not contain the element we are looking for. Also we set middle.

    ***

        const middle = parseInt((left + right) / 2)

        if (numbers[middle] > number) {
            right = middle - 1
        } else if (numbers[middle] < number) {
            left = middle + 1
        } else {
            return middle
        }

    ***

3.  ##### Repeat

    Repeat the same steps for the rest of the array

    ***

        while (left <= right) {
            const middle = parseInt((left + right) / 2)

            if (numbers[middle] > number) {
                right = middle - 1
            } else if (numbers[middle] < number) {
                left = middle + 1
            } else {
                return null
            }
        }

    ***
