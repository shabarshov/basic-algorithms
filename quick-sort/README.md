# Quicksort

Average: O(n log n)
![Quicksort GIF](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## Algorithm

> Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

© [**Wikipedia**](https://en.wikipedia.org/wiki/Quicksort)

#### Steps:

1.  ##### Check array length

    Obviously, there is no need to sort an empty array or an array with one element, which means we need to check the length of the array. This check will eventually stop our recursion.

    ***

        if (array.length < 2) return array

    ***

2.  ##### Select pivot

    In the GIF, the pivot is chosen as the median of the array values. I take the first element of the array as the pivot.

    ***

        const pivot = array[0]

    ***

3.  ##### Distribute elements across two arrays

    We distribute the elements over two arrays. In the end, we should get two arrays: with elements greater than the pivot and with elements less than the pivot

    ***

        let left = []
        let right = []

        for (let i = 1; i < array.length; i++)
            array[i] < pivot ? left.push(array[i]) : right.push(array[i])

    ***

4.  ##### Recursion

    The sub-arrays are then sorted recursively.

    ***

         return [...quickSort(left), pivot, ...quickSort(right)]
