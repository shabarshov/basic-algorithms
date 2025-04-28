# Breadth-first search (BFS)

![BFS GIF](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)

## Algorithm

> Breadth-first search (BFS) is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level.

© [**Wikipedia**](https://en.wikipedia.org/wiki/Quicksort)

#### For the algorithm, I implemented a createFriend() and a createQueue() functions:

---
```ts
    const createFriend = (name = "no name", ...friends) => {
        let _name = name
        let _friends = [...friends]

        return {
            addNewFriend: (newFriend) => {
                _friends = [..._friends, newFriend]
            },

            getName: () => {
                return _name
            },

            getFriends: () => {
                return _friends
            },
        }
    }
```
---
```ts
    const createQueue = () => {
        let queue = []

        return {
            push: (value) => {
                queue = [...queue, value]
            },

            shift: () => {
                queue = [...queue.slice(1)]
            },

            getFirst: () => {
                return queue[0]
            },

            isEmpty: () => {
                return queue.length === 0 ? true : false
            },

            getValues: () => {
                return queue
            },
        }
    }

---
```
#### Steps:

1.  ##### Preparation

    We need a graph structure and a starting point to apply the algorithm:

    ***
    ```ts
        const friend4 = createFriend("friend4")
        const friend5 = createFriend("friend5")
        const friend6 = createFriend("friend6")

        const friend3 = createFriend("friend3", friend5, friend6)
        const friend2 = createFriend("friend2", friend4)

        const friend1 = createFriend("friend1", friend2, friend3)
    ```ts
    ***

2.  ##### Working with graph vertices

    Checking out friend. If he does not fit, put all his friends in the queue:

    ***
    ```ts
        const currentFriend = queue.getFirst()

        if (currentFriend.getName() === name) {
            return true
        } else {
            queue.shift()
            currentFriend.getFriends().map((f) => queue.push(f))
        }
    ```ts
    ***

3.  ##### While

    We put this in a loop and get our algorithm:

    ***
    ```ts
        const findFriendByName = (friend, name) => {
            const queue = createQueue()
            queue.push(friend)

            while (!queue.isEmpty()) {
                const currentFriend = queue.getFirst()
                if (currentFriend.getName() === name) {
                   return true
                } else {
                    queue.shift()
                    currentFriend.getFriends().map((f) => queue.push(f))
                }
            }

            return false
        }
    ```
    ***
