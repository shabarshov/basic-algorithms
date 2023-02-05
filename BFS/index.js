import createQueue from "./queue.js"
import createFriend from "./friend.js"

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

const friend4 = createFriend("Dima")
const friend5 = createFriend("Denis")
const friend6 = createFriend("Semen")

const friend3 = createFriend("Vadim", friend5, friend6)
const friend2 = createFriend("Petr", friend4)

const friend1 = createFriend("Alexey", friend2, friend3)

console.log(findFriendByName(friend1, "Dima"))
